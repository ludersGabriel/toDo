import styled from 'styled-components'
import { devices } from '../../styles/global'

export const Wrapper = styled.main`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

`

export const Sep = styled.div`
  width: 90%;
  text-align: center;

  @media ${devices.desktop}{
    width: 70%
  }

  p{
    color: ${props => props.theme.colors.subHeader};
    font-weight: bold;
  }

  p:before,
  p:after {
    background-color: ${props => props.theme.colors.subHeader};
    content: "";
    display: inline-block;
    height: .1em;
    position: relative;
    vertical-align: middle;
    width: 40%;
  }

  p:before {
    right: 0.8em;
  }

  p:after {
    left: 0.8em;
  }

`

export const WelcomeWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin: 1em 0;

  h1{
    letter-spacing: .1em;
  }
`

export const SocialWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  gap: 1em;

  @media ${devices.desktop}{
    width: 60%;
  }
`

export const Button = styled.button`
  border-radius: 1em;
  width: 100%;
  text-align: left;
  padding: 0 1em;
  box-shadow: 0 0 .4em black;
  height: 48px;

  font-size: .7rem;

  .disabled{
    opacity: 0.3;
  }

  @media ${devices.desktop}{
    font-size: .8rem;
  }

  display: flex;
  align-items: center;
  gap: 1em;
`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 90%;

  @media ${devices.desktop}{
    width: 60%;
  }
  .error{
    &::placeholder{
      color: red;
      font-weight: bold;
    }
  }
`

export const LoginFooter = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  @media ${devices.desktop} {
    margin-top: 2em;
  }


  p{
    color: ${props => props.theme.colors.subHeader}
  }

  h3{
    text-decoration: underline;
  }
`
