import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  grid-area: footer;
  background-color: ${props => props.theme.colors.footer};

  display: grid;
  align-items: center;
  justify-content: center;
  padding: 1em;
`
