import styled from 'styled-components'
import { devices } from '../global'

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

  legend {
    font-size: 1.5em;
    font-weight: bold;

    @media ${devices.desktop}{
      font-size: 2em;
    }
  }

  p {
    font-size: 0.7em;
    color: rgba(31, 31, 42, 0.4);
    font-weight: bold;
    text-align: right;

    @media ${devices.desktop}{
      font-size: 1.3em;
    }
  }

`

export const Logo = styled.section`
  background-image: url('./logo.svg');
  background-repeat: no-repeat;
  background-size: contain;
  height: 2em;

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
  }
`
export const GirlWrapper = styled.section`
  grid-area: girl;
  z-index: -1;

  background-image: url('./girl4.png');
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  bottom:0;
  left:0;
  width: 80%;
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
    background-color: rgba(31, 31, 42, 0.4);
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
      padding: .8em 4em;
  }
`
export const Try = styled(Button)`
  color: white;
  background-color: #1F1F2A;
`

export const Login = styled(Button)`
  color: black;
  background-color: #E0E0E1;
`
