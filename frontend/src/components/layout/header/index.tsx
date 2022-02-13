import { HeaderWrapper, ThemeWrapper } from './styles'
import Moon from '@assets/moon.svg'
import { Logo } from '../../../styles/pages/home'
import { headerContent } from './content'
import { useLocale } from '../../../context/locale/context'
import Link from 'next/link'

const Header = () => {
  const { locale } = useLocale()

  return (
    <HeaderWrapper>
      <Link href='/'>
        <Logo src='/logo.svg' height={70} width={70} viewBox='0 0 65 19' />
      </Link>
      <ThemeWrapper>
        <Moon />
        <p>{headerContent[locale].lightMode}</p>
      </ThemeWrapper>
    </HeaderWrapper>
  )
}

export default Header
