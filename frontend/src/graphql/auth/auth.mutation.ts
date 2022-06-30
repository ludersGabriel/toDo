import { gql } from '@apollo/client'
import { useMutation } from '@apollo/react-hooks'
import { omit } from 'ramda'
import client from '../../apollo/apollo-client'
import { LoginInput, RegisterMutation, User, UserRegisterInput } from '../types'

const LOGIN_MUTATION = gql`
  mutation login($data: LoginInput!){
    login(data: $data)
  }
`

const REGISTER_MUTATION = gql`
  mutation register($data: UserRegisterInput!) {
   registerUser(data: $data) {
    id
    email
    name
    count
    role
  }
}
`

export async function useLogin(input: LoginInput): Promise<string> {
  const { data } = await client.mutate({
    mutation: LOGIN_MUTATION,
    variables: {
      data: input
    }
  })

  const token = data?.login ? data.login : {}

  return token
}

export async function useRegister(input: UserRegisterInput): Promise <User | null> {
  const { data } = await client.mutate<RegisterMutation>({
    mutation: REGISTER_MUTATION,
    variables: {
      data: input
    }
  })

  const ret = data?.registerUser ? omit(['__typename'], data.registerUser) : null

  return ret
}
