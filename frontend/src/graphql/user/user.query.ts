import { gql } from '@apollo/client'
import client from '../../apollo/apollo-client'
import { User } from '../types'

const USER = gql`
  query user{
    user{
      id,
      name,
      email,
      role
    }
  }
`

export async function useUser(token = ''): Promise<User | null> {
  const { data } = !token
    ? await client.query({
      query: USER
    })
    : await client.query({
      query: USER,
      context: {
        headers: {
          Authorization: token
        }
      }
    })

  return data?.user
}
