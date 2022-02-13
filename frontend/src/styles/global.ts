import styled, { createGlobalStyle } from 'styled-components'

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
  desktop: '600px'
}

export const devices = {
  mobile: `(min-width: ${sizes.mobile})`,
  desktop: `(min-width: ${sizes.desktop})`
}

export const Input = styled.input`
  background-color: #E5E5E5;
`
