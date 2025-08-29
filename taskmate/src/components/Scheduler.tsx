import { format } from 'date-fns'
import { useMemo, useState } from 'react'
import { suggestSchedule } from '../lib/aiService'
import { useTaskStore } from '../store/taskStore'
import type { SchedulePref, TimeBlock } from '../types'

export default function Scheduler() {
  const tasks = useTaskStore((s) => s.tasks)
  const [pref, setPref] = useState<SchedulePref>({
    workdayStartHour: 9,
    workdayEndHour: 17,
    slotMinutes: 30,
    daysAhead: 7,
  })
  const [loading, setLoading] = useState(false)
  const [blocks, setBlocks] = useState<TimeBlock[]>([])

  const taskMap = useMemo(() => Object.fromEntries(tasks.map((t) => [t.id, t])), [tasks])

  async function runSuggest() {
    setLoading(true)
    try {
      const res = await suggestSchedule(tasks, pref)
      setBlocks(res)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white border rounded p-4 space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Gợi ý lịch trình (AI)</h2>
        <button
          onClick={runSuggest}
          className="px-3 py-1.5 rounded bg-emerald-600 text-white disabled:opacity-50"
          disabled={loading || tasks.length === 0}
        >
          {loading ? 'Đang tính...' : 'Gợi ý' }
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
        <label className="flex items-center gap-2">Bắt đầu
          <input
            type="number"
            min={0}
            max={23}
            value={pref.workdayStartHour}
            onChange={(e) => setPref({ ...pref, workdayStartHour: Number(e.target.value) })}
            className="border rounded px-2 py-1 w-20"
          />
        </label>
        <label className="flex items-center gap-2">Kết thúc
          <input
            type="number"
            min={1}
            max={24}
            value={pref.workdayEndHour}
            onChange={(e) => setPref({ ...pref, workdayEndHour: Number(e.target.value) })}
            className="border rounded px-2 py-1 w-20"
          />
        </label>
        <label className="flex items-center gap-2">Slot (phút)
          <input
            type="number"
            min={15}
            step={15}
            value={pref.slotMinutes}
            onChange={(e) => setPref({ ...pref, slotMinutes: Number(e.target.value) })}
            className="border rounded px-2 py-1 w-24"
          />
        </label>
        <label className="flex items-center gap-2">Số ngày tới
          <input
            type="number"
            min={1}
            value={pref.daysAhead}
            onChange={(e) => setPref({ ...pref, daysAhead: Number(e.target.value) })}
            className="border rounded px-2 py-1 w-24"
          />
        </label>
      </div>

      {blocks.length > 0 ? (
        <div className="mt-2 space-y-2">
          {blocks.map((b, i) => (
            <div key={i} className="flex items-center justify-between border rounded px-3 py-2">
              <div>
                <div className="font-medium">{taskMap[b.taskId]?.title ?? 'Nhiệm vụ'}</div>
                <div className="text-xs text-gray-500">{taskMap[b.taskId]?.notes}</div>
              </div>
              <div className="text-sm text-gray-700">
                {format(new Date(b.start), 'dd/MM HH:mm')} → {format(new Date(b.end), 'HH:mm')}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-gray-500">Chưa có lịch gợi ý. Nhấn "Gợi ý" để tạo.</p>
      )}
    </div>
  )
}

