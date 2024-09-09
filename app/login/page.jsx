import Login from '@components/Login'
import { Main } from '@components/Main'

export const metadata = {
  title: 'Intajivity • login'
}

export default function page() {
  return (
    <Main>
      <Login />
    </Main>
  )
}
