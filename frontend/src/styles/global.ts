import styled, { createGlobalStyle } from 'styled-components'
import SVG from 'react-inlinesvg'

export default createGlobalStyle`
  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    background: none;
    list-style: none;
    text-decoration: none;
    outline: none;
    border: none;
    border-radius: 0;
    box-sizing: border-box;
    color: inherit;
}

  body{
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    min-height: 100vh;
    min-height: -webkit-fill-available;
    font: 400 16px DM Sans, sans-serif;
  }

  button {
    cursor: pointer;
  }

  html {
    height: -webkit-fill-available;
  }

`
const sizes = {
  mobile: '320px',
  desktop: '700px'
}

export const devices = {
  mobile: `(max-width: ${sizes.mobile})`,
  desktop: `(min-width: ${sizes.desktop})`
}

export const Input = styled.input`
  background-color: #E5E5E5;
  box-shadow: 0 0 .4em black;
  border-radius: 1em;
  height: 48px;
  padding: 0 1em;

  font-size: 1.1rem;

  &::placeholder{
    color: #1F1F2A;
    opacity: .5;
    font-weight: bold;
  }
`

export const Logo = styled(SVG)`
  & path {
    fill: ${props => props.theme.logoFill};
  }
  @media ${devices.desktop}{
    height: 3.4em;
  }
  cursor: pointer;

`

export const Svg = styled(SVG)`
  & path {
    fill: ${props => props.fill};
  }
`
