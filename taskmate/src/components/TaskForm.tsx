import { useState } from 'react'
import { useTaskStore } from '../store/taskStore'
import type { Priority, Status } from '../types'

export default function TaskForm() {
  const add = useTaskStore((s) => s.add)
  const [title, setTitle] = useState('')
  const [notes, setNotes] = useState('')
  const [priority, setPriority] = useState<Priority>('medium')
  const [status, setStatus] = useState<Status>('todo')
  const [estimate, setEstimate] = useState<number | ''>('')
  const [due, setDue] = useState('')

  function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!title.trim()) return
    add({
      title: title.trim(),
      notes: notes.trim() || undefined,
      priority,
      status,
      estimateMinutes: estimate === '' ? undefined : Number(estimate),
      dueDate: due || undefined,
      tags: [],
    })
    setTitle('')
    setNotes('')
    setPriority('medium')
    setStatus('todo')
    setEstimate('')
    setDue('')
  }

  return (
    <form onSubmit={submit} className="bg-white border rounded p-4 space-y-3">
      <div className="flex gap-2">
        <input
          className="flex-1 border rounded px-3 py-2"
          placeholder="Công việc..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="px-4 py-2 rounded bg-blue-600 text-white">Thêm</button>
      </div>
      <textarea
        className="w-full border rounded px-3 py-2"
        placeholder="Ghi chú"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        rows={2}
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <select className="border rounded px-3 py-2" value={priority} onChange={(e) => setPriority(e.target.value as Priority)}>
          <option value="low">Độ ưu tiên: Thấp</option>
          <option value="medium">Độ ưu tiên: Trung bình</option>
          <option value="high">Độ ưu tiên: Cao</option>
        </select>
        <select className="border rounded px-3 py-2" value={status} onChange={(e) => setStatus(e.target.value as Status)}>
          <option value="todo">Trạng thái: Chờ</option>
          <option value="doing">Đang làm</option>
          <option value="done">Xong</option>
        </select>
        <input
          type="number"
          min={15}
          step={15}
          className="border rounded px-3 py-2"
          placeholder="Ước lượng (phút)"
          value={estimate}
          onChange={(e) => setEstimate(e.target.value === '' ? '' : Number(e.target.value))}
        />
        <input type="datetime-local" className="border rounded px-3 py-2" value={due} onChange={(e) => setDue(e.target.value)} />
      </div>
    </form>
  )
}

