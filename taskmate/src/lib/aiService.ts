import { addMinutes, isBefore, setHours, setMinutes, startOfDay } from 'date-fns'
import type { SchedulePref, Task, TimeBlock } from '../types'

export type AiMode = 'mock' | 'api'

const DEFAULT_PREF: SchedulePref = {
  workdayStartHour: 9,
  workdayEndHour: 17,
  slotMinutes: 30,
  daysAhead: 7,
}

export async function suggestSchedule(
  tasks: Task[],
  pref: Partial<SchedulePref> = {},
  mode: AiMode = (import.meta.env.VITE_AI_MODE as AiMode) || 'mock'
): Promise<TimeBlock[]> {
  const p = { ...DEFAULT_PREF, ...pref }
  if (mode === 'api') {
    // Expect a backend proxy at /api/suggest to avoid exposing keys in frontend
    const res = await fetch(import.meta.env.VITE_AI_API_URL || '/api/suggest', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tasks, pref: p }),
    })
    if (!res.ok) throw new Error('AI API error')
    return (await res.json()) as TimeBlock[]
  }
  return mockHeuristic(tasks, p)
}

function minutesNeeded(t: Task) {
  return Math.max(30, Math.min(8 * 60, t.estimateMinutes ?? 60))
}

function priorityScore(p: Task['priority']) {
  return p === 'high' ? 3 : p === 'medium' ? 2 : 1
}

function mockHeuristic(tasks: Task[], pref: SchedulePref): TimeBlock[] {
  const now = new Date()
  const result: TimeBlock[] = []
  const sorted = tasks
    .filter((t) => t.status !== 'done')
    .sort((a, b) => {
      const dueA = a.dueDate ? new Date(a.dueDate).getTime() : Infinity
      const dueB = b.dueDate ? new Date(b.dueDate).getTime() : Infinity
      const p = priorityScore(b.priority) - priorityScore(a.priority)
      return p !== 0 ? p : dueA - dueB
    })

  let cursor = alignToSlot(now, pref)
  const endLimit = addMinutes(now, pref.daysAhead * 24 * 60)

  for (const t of sorted) {
    let remaining = minutesNeeded(t)
    let safeDue = t.dueDate ? new Date(t.dueDate) : endLimit

    while (remaining > 0 && isBefore(cursor, endLimit)) {
      cursor = ensureWorkHours(cursor, pref)
      const next = addMinutes(cursor, pref.slotMinutes)
      if (next > safeDue) break
      result.push({ taskId: t.id, start: cursor.toISOString(), end: next.toISOString() })
      remaining -= pref.slotMinutes
      cursor = next
    }
  }
  return result
}

function alignToSlot(d: Date, pref: SchedulePref) {
  const minutes = d.getMinutes()
  const mod = minutes % pref.slotMinutes
  return new Date(d.getTime() + (mod ? (pref.slotMinutes - mod) * 60000 : 0))
}

function ensureWorkHours(d: Date, pref: SchedulePref) {
  const s = setMinutes(setHours(startOfDay(d), pref.workdayStartHour), 0)
  const e = setMinutes(setHours(startOfDay(d), pref.workdayEndHour), 0)
  if (d < s) return s
  if (d >= e) {
    const nextDay = new Date(s.getTime() + 24 * 60 * 60000)
    return nextDay
  }
  return d
}

