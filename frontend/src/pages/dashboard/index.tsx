import { GetServerSideProps } from 'next'
import { useAuth } from '../../context/auth/context'
import nookies from 'nookies'
import { useUser } from '../../graphql/user/user.query'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const infoResult = 'the backend seems to be offline'

  const { 'toDo-token': token } = nookies.get(ctx)

  const user = await useUser(token)

  if (!user || !token) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      info: infoResult
    }
  }
}

const Dashboard = () => {
  const { isAuthenticaded, user, signOut } = useAuth()

  return <div>
    <div>
      token: {isAuthenticaded ? 'Tam online' : 'fora'}
    </div>
    <div>
      user: {JSON.stringify(user)}
    </div>
    <button onClick={signOut}>sign out</button>
  </div>
}

export default Dashboard
