import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { info } from '../graphql/info.query'
import { GetServerSideProps } from 'next'
import Meta from '../components/meta'
import {
  Container,
  LogoWrapper,
  SubLogoWrapper,
  ButtonWrapper,
  GirlWrapper,
  Try,
  Login
} from '../styles/pages/home'
import Logo from '@assets/logoLight.svg'

export const getServerSideProps: GetServerSideProps = async () => {
  let infoResult
  try {
    infoResult = await info()
  } catch {
    infoResult = 'the backend seems to be offline'
  }

  return {
    props: {
      info: infoResult
    }
  }
}

interface IHomeProps {
  info: string,
}

const Home: React.FC<IHomeProps> = ({ info }) => {
  const router = useRouter()
  const { locale, locales, defaultLocale } = router

  useEffect(() => {
    console.log({ info, locale, locales, defaultLocale })
  }, [])

  return (
    <>
      <Meta title={'Todo'}/>
      <Container>
        <LogoWrapper>
          <Logo />
          <legend>A simple and clean<br/>
          task manager</legend>
        </LogoWrapper>

        <SubLogoWrapper>
          <p>
            Have you ever used a Task Manager and felt it was<br/>
            confusing and unintuitive? That’s why we created todo!
          </p>
        </SubLogoWrapper>

        <ButtonWrapper>
          <Try>Try it!</Try>
          <p><span>or</span></p>
          <Login>Login</Login>
        </ButtonWrapper>

        <GirlWrapper/>

      </Container>
    </>
  )
}

export default Home
