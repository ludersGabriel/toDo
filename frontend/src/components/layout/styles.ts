import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'header'
    'content'
    'footer';
  min-width: 100vw;
  min-height: 100vh;
`
export const Content = styled.main`
  grid-area: content;
`
