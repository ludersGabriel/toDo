import React from 'react'
import { LocaleContext, LocaleEnum } from './context'

type Props = {
  children: React.ReactNode
  locale: LocaleEnum
}

const LocaleProvider = ({ children, locale }: Props) => {
  return (
    <LocaleContext.Provider value={{ locale: locale || 'en' }}>
      {children}
    </LocaleContext.Provider>
  )
}

export default LocaleProvider
