import { ApolloClient, ApolloLink, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import getConfig from 'next/config'
import nookies, { parseCookies } from 'nookies'

const { publicRuntimeConfig } = getConfig()

const httpLink = createHttpLink({
  uri: publicRuntimeConfig.uri
})

const authLink = setContext((request, { headers }) => {
  let token = ''
  if (typeof window !== 'undefined') {
    const { 'toDo-token': newToken } = parseCookies()
    token = newToken
  }
  return {
    headers: {
      ...headers,
      Authorization: token ?? undefined
    }
  }
})

const isSSR = typeof window === 'undefined'

const client = new ApolloClient({
  link: !isSSR ? authLink.concat(httpLink) : httpLink,
  cache: new InMemoryCache(),
  ssrMode: isSSR
})

export default client
