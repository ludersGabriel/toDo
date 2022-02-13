import { useAuth } from '../../context/auth/context'

const Dashboard = () => {
  const { isAuthenticaded, user } = useAuth()

  return <div>
    <div>
      token: {isAuthenticaded ? 'Tam online' : 'fora'}
    </div>
    <div>
      user: {JSON.stringify(user)}
    </div>
  </div>
}

export default Dashboard
