import { FooterWrapper } from './styles'
import { useLocale } from '../../../context/locale/context'
import { footerContent } from './content'

const Footer = () => {
  const { locale } = useLocale()

  return (
    <FooterWrapper>
      <p>{footerContent[locale].summary}</p>
    </FooterWrapper>
  )
}

export default Footer
