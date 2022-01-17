import { HeaderWrapper, ThemeWrapper } from './styles'
import Moon from '@assets/moon.svg'
import Logo from '@assets/logo.svg'
import { headerContent } from './content'
import { useLocale } from '../../../context/locale/context'

const Header = () => {
  const { locale } = useLocale()

  return (
    <HeaderWrapper>
      <Logo />
      <ThemeWrapper>
        <Moon />
        <p>{headerContent[locale].lightMode}</p>
      </ThemeWrapper>
    </HeaderWrapper>
  )
}

export default Header
