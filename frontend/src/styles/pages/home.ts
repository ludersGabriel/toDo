import styled from 'styled-components'
import { devices } from '../global'
import SVG from 'react-inlinesvg'

export const Container = styled.main`
  margin: 0 2em;
  display: grid;
  height: 100%;
  grid-template-areas:
    'logo'
    'girl';

  grid-template-rows: auto 1fr;

  gap: 2em;
  grid-template-columns: 1fr;

  @media ${devices.desktop}{
    gap: 5em;
  }

  legend {
    font-size: 1.5em;
    font-weight: bold;

    @media ${devices.desktop}{
      font-size: 2em;
    }
  }

  p {
    font-size: 1em;
    color: ${props => props.theme.colors.subHeader};
    font-weight: bold;
    text-align: right;

    @media ${devices.desktop}{
      font-size: 1.3em;
    }
  }

`

export const Logo = styled(SVG)`
  & path {
    fill: ${props => props.theme.logoFill};
  }
  @media ${devices.desktop}{
    height: 3.4em;
  }

`

export const LogoWrapper = styled.section`
  grid-area: logo;
  display: grid;
  grid-template-rows: .5fr 1fr;
  padding-top: 1em;
  align-items: center;

  @media ${devices.desktop}{
    padding: 5% 0 0 25%;
    gap: 1.3em;
  }

`

export const SubLogoWrapper = styled.section`
  grid-area: girl;
  display: grid;
  gap: 2em;
  grid-template-rows: auto 1fr;

  @media ${devices.desktop}{
    justify-content: center;
    align-items: center;
    gap: 5em;
  }
`
export const GirlWrapper = styled.section`
  grid-area: girl;
  z-index: -1;

  background-image: url(${props => props.theme.girl});
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  bottom:0;
  left:0;
  width: 100%;
  height: 50%;
  background-position: 30% 30%;
  opacity: 0.4;

  @media ${devices.desktop}{
    background-position: left;
    background-size: contain;
  }

`

export const ButtonWrapper = styled.section`
  align-self: baseline;

  display: grid;
  justify-content: right;

  gap: .2em;

  p{
    text-align: center;
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
    right: 0.5em;
    margin-left: -50%;
  }

  p:after {
    left: 0.5em;
    margin-right: -50%;
  }
`

export const Button = styled.button`
  border-radius: .5em;
  padding: .7em 2.4em;
  text-align: center;
  background-color: red;
  font-weight: bold;
  font-size: 1em;
  color: black;

  @media ${devices.desktop}{
      font-size: 1.1em;
      padding: 1em 5em;
  }
`
export const Try = styled(Button)`
  color: ${props => props.theme.colors.buttonDarkText};
  background-color: ${props => props.theme.colors.buttonDarkBackground};
`

export const Login = styled(Button)`
  color: ${props => props.theme.colors.buttonLightText};
  background-color: ${props => props.theme.colors.buttonLightBackground};
`
