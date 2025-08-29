import Scheduler from './Scheduler'

export default function SuggestionPanel() {
  return (
    <div className="space-y-3">
      <Scheduler />
      <p className="text-xs text-gray-500">
        Lưu ý: AI ở chế độ mô phỏng (mock). Bạn có thể cấu hình biến môi
        trường `VITE_AI_MODE=api` và `VITE_AI_API_URL=/api/suggest` để gọi backend proxy.
      </p>
    </div>
  )
}

