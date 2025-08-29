import { Task } from '../types'
import { useTaskStore } from '../store/taskStore'

export default function TaskItem({ task }: { task: Task }) {
  const update = useTaskStore((s) => s.update)
  const remove = useTaskStore((s) => s.remove)
  return (
    <div className="flex items-start gap-3 p-3 border rounded bg-white">
      <input
        type="checkbox"
        checked={task.status === 'done'}
        onChange={(e) => update(task.id, { status: e.target.checked ? 'done' : 'todo' })}
        className="mt-1"
      />
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span className="font-medium">{task.title}</span>
          {task.priority !== 'medium' && (
            <span
              className={
                'text-xs px-2 py-0.5 rounded ' +
                (task.priority === 'high' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700')
              }
            >
              {task.priority === 'high' ? 'Ưu tiên cao' : 'Ưu tiên thấp'}
            </span>
          )}
        </div>
        {task.notes && <p className="text-sm text-gray-600">{task.notes}</p>}
        <div className="text-xs text-gray-500 mt-1">
          {task.estimateMinutes ? <span>Ước lượng: {task.estimateMinutes} phút</span> : <span>Chưa ước lượng</span>}
          {task.dueDate && <span className="ml-3">Hạn: {new Date(task.dueDate).toLocaleString()}</span>}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <select
          className="border rounded px-2 py-1 text-sm"
          value={task.status}
          onChange={(e) => update(task.id, { status: e.target.value as Task['status'] })}
        >
          <option value="todo">Chờ</option>
          <option value="doing">Đang làm</option>
          <option value="done">Xong</option>
        </select>
        <button className="text-red-600 text-sm" onClick={() => remove(task.id)}>
          Xóa
        </button>
      </div>
    </div>
  )
}

