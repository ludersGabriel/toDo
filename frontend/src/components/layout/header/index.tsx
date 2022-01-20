import { HeaderWrapper, ThemeWrapper } from './styles'
import Moon from '@assets/moon.svg'
import { Logo } from '../../../styles/pages/home'
import { headerContent } from './content'
import { useLocale } from '../../../context/locale/context'

const Header = () => {
  const { locale } = useLocale()

  return (
    <HeaderWrapper>
      <Logo src='./logo.svg' height={70} width={70} viewBox='0 0 65 19' />
      <ThemeWrapper>
        <Moon />
        <p>{headerContent[locale].lightMode}</p>
      </ThemeWrapper>
    </HeaderWrapper>
  )
}

export default Header
