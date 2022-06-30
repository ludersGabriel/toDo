import { createContext, useContext } from 'react'
import { LoginInput, User, UserRegisterInput } from '../../graphql/types'

export type AuthContextType = {
  isAuthenticaded: boolean
  signIn: (input: LoginInput) => Promise<void>
  signOut: () => void
  register: (data: UserRegisterInput) => Promise<User | null>
  token: string | null
  user: User | null
}

export const AuthContext = createContext({} as AuthContextType)

export const useAuth = () => {
  return useContext(AuthContext)
}
