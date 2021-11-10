import { createGlobalStyle } from 'styled-components'

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

  html {
    height: -webkit-fill-available;
  }

`
