import { ApolloClient, InMemoryCache } from '@apollo/client'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

const client = new ApolloClient({
  uri: publicRuntimeConfig.uri,
  cache: new InMemoryCache()
})

export default client
