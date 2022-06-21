import styled from 'styled-components'
import {
  Sep,
  Wrapper,
  WelcomeWrapper,
  SocialWrapper,
  Button,
  LoginForm,
  LoginFooter
} from '../login/styles'

export const RegisterWrapper = styled(Wrapper)``

export const RegisterSep = styled(Sep)``

export const RegisterWelcomeWrapper = styled(WelcomeWrapper)``

export const RegisterSocialWrapper = styled(SocialWrapper)``

export const RegisterButton = styled(Button)``

export const RegisterForm = styled(LoginForm)``

export const PasswordWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    margin: 0 1em;
  }

`

export const InputWrapper = styled.section`
  width: 100%;
  p {
    color: red;
    margin-top: .4em;
  }
`
export const RegisterFooter = styled(LoginFooter)``
