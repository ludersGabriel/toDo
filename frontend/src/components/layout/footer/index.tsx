import { FooterWrapper } from './styles'
import type { TLocale } from '../../../types/locale'

const footerContent: TLocale = {
  en: {
    title: 'footer in english'
  },
  'pt-BR': {
    title: 'footer em ptbr mano'
  }
}

const Footer = () => {
  return (
    <FooterWrapper>
      opa footer
    </FooterWrapper>
  )
}

export default Footer
