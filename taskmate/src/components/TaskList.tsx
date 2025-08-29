import TaskItem from './TaskItem'
import { useTaskStore } from '../store/taskStore'

export default function TaskList() {
  const tasks = useTaskStore((s) => s.tasks)
  const clearDone = useTaskStore((s) => s.clearDone)
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Danh sách công việc</h2>
        <button className="text-sm text-gray-600 hover:underline" onClick={clearDone}>
          Xóa mục đã xong
        </button>
      </div>
      {tasks.length === 0 ? (
        <p className="text-sm text-gray-500">Chưa có công việc nào. Hãy thêm nhiệm vụ đầu tiên!</p>
      ) : (
        tasks.map((t) => <TaskItem key={t.id} task={t} />)
      )}
    </div>
  )
}

