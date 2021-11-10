import { HeaderWrapper, ThemeWrapper } from './styles'
import Moon from '@assets/moon.svg'
import Logo from '@assets/logo.svg'

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <ThemeWrapper>
        <Moon />
        <p>Dark Mode</p>
      </ThemeWrapper>
    </HeaderWrapper>
  )
}

export default Header
