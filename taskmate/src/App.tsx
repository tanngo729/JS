import Layout from './components/Layout'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import SuggestionPanel from './components/SuggestionPanel'

export default function App() {
  return (
    <Layout>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-3">
          <TaskForm />
          <TaskList />
        </div>
        <SuggestionPanel />
      </div>
    </Layout>
  )
}

