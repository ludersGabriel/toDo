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
      <p>This is a work in progress. Soon there will be a complete app (: </p>
    </FooterWrapper>
  )
}

export default Footer
