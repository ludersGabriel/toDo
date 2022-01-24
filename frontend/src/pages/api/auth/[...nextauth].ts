import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { useLogin } from '../../../graphql/auth/auth.mutation'

const providers = [
  Providers.Credentials({
    name: 'Credentials',
    authorize: async (credentials) => {
      const user = {
        email: credentials.email,
        password: credentials.password
      }

      return user || null
    }
  })
]

const callbacks = {
  async signIn(user, account) {
    if (account.id !== 'credentials') return false

    user.accessToken = useLogin({ email: user.email, password: user.password })
    return !!user.accessToken
  },
  async jwt(token, user) {
    if (user) token = { accessToken: user?.accessToken }

    return token
  },
  async session(session, token) {
    session.accessToken = token?.accessToken
    return session
  },
  async redirect(url, baseUrl) {
    return url.startsWith(baseUrl) ? url : baseUrl
  }
}

const options = {
  providers,
  callbacks
}

export default (req, res) => NextAuth(req, res, options)
