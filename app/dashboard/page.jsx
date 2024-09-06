import Dashboard from '@components/Dashboard'
import { Main } from '@components/Main'

export const metadata = {
  title: 'To Do List • Dashboard',
  description: 'Do some work bitch!'
}

export default function dashboardPage() {

  return (
    <Main>
      <Dashboard />
    </Main>
  )
}
