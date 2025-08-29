import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Task } from '../types'

type State = {
  tasks: Task[]
}

type Actions = {
  add: (t: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) => void
  update: (id: string, patch: Partial<Task>) => void
  remove: (id: string) => void
  clearDone: () => void
}

function uid() {
  return Math.random().toString(36).slice(2, 10)
}

export const useTaskStore = create<State & Actions>()(
  persist(
    (set) => ({
      tasks: [],
      add: (t) =>
        set((s) => ({
          tasks: [
            ...s.tasks,
            {
              ...t,
              id: uid(),
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
            },
          ],
        })),
      update: (id, patch) =>
        set((s) => ({
          tasks: s.tasks.map((x) =>
            x.id === id ? { ...x, ...patch, updatedAt: new Date().toISOString() } : x
          ),
        })),
      remove: (id) => set((s) => ({ tasks: s.tasks.filter((x) => x.id !== id) })),
      clearDone: () => set((s) => ({ tasks: s.tasks.filter((x) => x.status !== 'done') })),
    }),
    { name: 'taskmate-store' }
  )
)

