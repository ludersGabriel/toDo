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
  Login,
  Logo
} from '../styles/pages/home'

export const getServerSideProps: GetServerSideProps = async () => {
  const infoResult = 'the backend seems to be offline'

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

  return (
    <>
      <Meta title={'Todo'}/>
      <Container>
        <LogoWrapper>
          <Logo />
          <legend>A clean and simple<br/>
          Task manager</legend>
        </LogoWrapper>

        <SubLogoWrapper>
            <p>
              Have you ever used a Task Manager and felt it was<br/>
              confusing and unintuitive? That’s why we created todo!
            </p>

          <ButtonWrapper>
            <Try>Try it!</Try>
            <p><span>or</span></p>
            <Login>Login</Login>
          </ButtonWrapper>
        </SubLogoWrapper>

        <GirlWrapper/>

      </Container>
    </>
  )
}

export default Home
