import styled from 'styled-components'

export const Container = styled.main`
  display: grid;
  margin: 0 2em;
  height: 100%;
  grid-template-areas: 
    'logo'
    'sublogo'
    'girl';

  grid-template-rows: auto auto 1fr;

  gap: 2em;
  grid-template-columns: 1fr;

  legend {
    font-size: 1.5em;
    font-weight: bold;
  }

  p {
    font-size: 0.7em;
    color: rgba(31, 31, 42, 0.4);
    font-weight: bold;
    text-align: right;
  }

`

export const LogoWrapper = styled.section`
  grid-area: logo;
`

export const SubLogoWrapper = styled.section`
  grid-area: sublogo;
`
export const GirlWrapper = styled.section`
  grid-area: girl;
  width: 100%;
  height: 100%;

  background-image: url('./girl4.png');
  background-repeat: no-repeat; 
  background-size: cover;
  background-position: 35% 50%;
  opacity: 0.4;
`

export const ButtonWrapper = styled.section`
  grid-area: girl;

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
`
export const Try = styled(Button)`
  color: white;
  background-color: #1F1F2A;
`

export const Login = styled(Button)`
  color: black;
  background-color: #E0E0E1;
`
