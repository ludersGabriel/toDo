import { gql } from '@apollo/client'
import { omit } from 'ramda'
import client from '../../apollo/apollo-client'
import { User, UserQuery } from '../types'

const USER = gql`
  query user{
    user{
      id,
      name,
      email,
      role,
      count
    }
  }
`

export async function useUser(token = ''): Promise<User | null> {
  let user

  try {
    const { data } = !token
      ? await client.query<UserQuery>({
        query: USER
      })
      : await client.query<UserQuery>({
        query: USER,
        context: {
          headers: {
            Authorization: token
          }
        },
        fetchPolicy: 'network-only'
      })

    user = data?.user ? omit(['__typename'], data.user) : null
  } catch {
    user = null
  }

  return user
}
