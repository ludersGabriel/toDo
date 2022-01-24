import { gql } from '@apollo/client'
import client from '../../apollo/apollo-client'
import { LoginInput } from '../types'

const LOGIN_MUTATION = gql`
  mutation login($data: LoginInput!){
    login(data: $data)
  }
`

const REGISTER_MUTATION = gql`
  mutation register($email: String!, $password: String!, $name: String!) {
   registerUser(data: {email: $email, password: $password, name: $name}) {
    id
    email
    name
  }
}
`

export async function useLogin(input: LoginInput) {
  const { data } = await client.mutate({
    mutation: LOGIN_MUTATION,
    variables: {
      data: input
    }
  })

  const ret = data?.login ? data.login : { login: '' }

  return ret
}

export async function useRegister(email: string, password: string, name: string) {
  const { data } = await client.mutate({
    mutation: REGISTER_MUTATION,
    variables: {
      email,
      password,
      name
    }
  })

  const ret = data?.registerUser
    ? data.registerUser
    : { registerUser: null }

  return ret
}
