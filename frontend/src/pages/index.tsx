import { useEffect } from 'react'
import Head from 'next/head'
import Anonymous from '../assets/anonymous.svg'
import { info } from '../graphql/info'
import { Container, ListContainer } from '../styles/pages/home'
import { GetServerSideProps } from 'next'
import { register, useLogin } from '../graphql/mutations/auth'

export const getServerSideProps: GetServerSideProps = async () => {
  let infoResult
  try {
    infoResult = await info()
  } catch {
    infoResult = 'the backend seems to be offline'
  }

  const user = await useLogin({ email: 'admin@gmail.com', password: '1234mudar' })

  return {
    props: {
      info: infoResult,
      user
    }
  }
}

interface IHomeProps {
  info: string,
  user: string
}

const Home: React.FC<IHomeProps> = ({ info, user }) => {
  useEffect(() => {
    console.log(user)
  })

  return (
    <Container>
      <Head>
        <title>Template Repo</title>
      </Head>

      <Anonymous />
      <h1>NextJS and NodeJS structure</h1>
      <ListContainer>
        <fieldset>
          <legend>Frontend</legend>
          <ul>
            <li>NextJS</li>
            <li>Typescript</li>
            <li>Graphql with Apollo-Client</li>
            <li>Styled-Components</li>
            <li>Eslint</li>
          </ul>
        </fieldset>
        <fieldset>
          <legend>Backend</legend>
          <ul>
            <li>NodeJS</li>
            <li>Typescript</li>
            <li>Graphql with Apollo-Server</li>
            <li>TypeGraphql for type-safe apis</li>
            <li>Prisma ORM w/ PSQL</li>
            <li>Jest for tests</li>
            <li>Eslint</li>
          </ul>
        </fieldset>
      </ListContainer>
      <p>
        {info}
      </p>

    </Container>
  )
}

export default Home
