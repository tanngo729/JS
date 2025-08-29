export type Priority = 'low' | 'medium' | 'high'
export type Status = 'todo' | 'doing' | 'done'

export interface Task {
  id: string
  title: string
  notes?: string
  priority: Priority
  estimateMinutes?: number
  dueDate?: string // ISO date
  tags?: string[]
  status: Status
  createdAt: string
  updatedAt: string
}

export interface TimeBlock {
  taskId: string
  start: string // ISO datetime
  end: string // ISO datetime
}

export interface SchedulePref {
  workdayStartHour: number // 9
  workdayEndHour: number   // 17
  slotMinutes: number      // 30
  daysAhead: number        // 7
}

