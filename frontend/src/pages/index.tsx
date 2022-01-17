import { } from 'react'
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

import { homeContent } from '../content/home/content'
import { formatter } from '../types/locale'
import { useLocale } from '../context/locale/context'

export const getServerSideProps: GetServerSideProps = async () => {
  const infoResult = 'the backend seems to be offline'

  return {
    props: {
      info: infoResult
    }
  }
}

interface IHomeProps {
  info: string
}

const Home: React.FC<IHomeProps> = ({ info }) => {
  const { locale } = useLocale()

  return (
    <>
      <Meta title={'Todo'} />
      <Container>
        <LogoWrapper>
          <Logo />
          <legend>{formatter(homeContent[locale].title)}</legend>
        </LogoWrapper>

        <SubLogoWrapper>
          <p>
            {formatter(homeContent[locale].subLogo)}
          </p>

          <ButtonWrapper>
            <Try>{homeContent[locale].buttonTry}</Try>
            <p><span>{homeContent[locale].buttonOr}</span></p>
            <Login>{homeContent[locale].buttonLogin}</Login>
          </ButtonWrapper>
        </SubLogoWrapper>

        <GirlWrapper />

      </Container>
    </>
  )
}

export default Home
