import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  grid-area: header;
  background-color: #E0E0E1;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
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
