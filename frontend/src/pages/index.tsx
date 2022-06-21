import { } from 'react'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import nookies from 'nookies'
import Meta from '../components/meta'
import {
  Container,
  LogoWrapper,
  SubLogoWrapper,
  ButtonWrapper,
  GirlWrapper,
  Try,
  Login,
  Logo
} from '../styles/pages/home'

import { homeContent } from '../content/home/content'
import { formatter } from '../types/locale'
import { useLocale } from '../context/locale/context'
import { useUser } from '../graphql/user/user.query'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const infoResult = 'the backend seems to be offline'

  const { 'toDo-token': token } = nookies.get(ctx)

  const user = await useUser(token)

  if (user && token) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false
      }
    }
  }

  return {
    props: {
      info: infoResult
    }
  }
}

interface IHomeProps {
  info: string
}

const Home = () => {
  const { locale } = useLocale()

  return (
    <>
      <Meta title={'Todo'} />
      <Container>
        <LogoWrapper>
          <Logo src='/logo.svg' viewBox='0 0 65 19' />
          <legend>{formatter(homeContent[locale].title)}</legend>
        </LogoWrapper>

        <SubLogoWrapper>
          <p>
            {formatter(homeContent[locale].subLogo)}
          </p>
          <ButtonWrapper>
            <Link href='/register'>
              <Try>{homeContent[locale].buttonTry}</Try>
            </Link>
            <p><span>{homeContent[locale].buttonOr}</span></p>
            <Link href='/login'>
              <Login>{homeContent[locale].buttonLogin}</Login>
            </Link>
          </ButtonWrapper>
        </SubLogoWrapper>

        <GirlWrapper />

      </Container>
    </>
  )
}

export default Home
