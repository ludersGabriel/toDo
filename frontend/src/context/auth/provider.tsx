import React, { useState } from 'react'
import { useLogin } from '../../graphql/auth/auth.mutation'
import { LoginInput, User } from '../../graphql/types'
import { AuthContext } from './context'
import { setCookie, destroyCookie } from 'nookies'
import Router from 'next/router'
import { useUser } from '../../graphql/user/user.query'

type AuthProviderProps = {
  children: React.ReactNode,
  serverToken: string | null,
  serverUser: User | null
}

const AuthProvider = ({ children, serverToken, serverUser }: AuthProviderProps) => {
  const [token, setToken] = useState<string | null>(serverToken)
  const [user, setUser] = useState<User | null>(serverUser)

  const isAuthenticaded = !!token && !!user

  async function signIn({ email = 'admin@gmail.com', password = '1234mudar' }: LoginInput) {
    const token = await useLogin({ email, password })
    setCookie(undefined, 'toDo-token', token, { maxAge: 60 * 60 * 24, path: '/' })
    setToken(token)

    const user = await useUser()
    setUser(user)

    Router.push('/dashboard')
  }

  function signOut() {
    destroyCookie(null, 'toDo-token', { path: '/' })
    Router.push('/')
  }

  return (
    <AuthContext.Provider value={{ isAuthenticaded, signIn, signOut, token, user }} >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
