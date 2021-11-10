import { createContext, useContext } from 'react'

export enum LocaleEnum {
  en = 'en',
  ptBr = 'pt-BR'
}

type TLocaleContext = {
  locale: LocaleEnum
}

export const LocaleContext = createContext<TLocaleContext>({ locale: LocaleEnum.en })

export const useLocale = () => {
  return useContext(LocaleContext)
}
