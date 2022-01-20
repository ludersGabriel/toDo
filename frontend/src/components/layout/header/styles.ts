import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  grid-area: header;
  background-color: ${props => props.theme.colors.header};

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  padding: 0 2em;
`

export const ThemeWrapper = styled.section`
  display: grid;
  justify-items: center;

  justify-self: right;
  padding-right: 1em;


  p{
    font-size: 0.8em;
  }
`
