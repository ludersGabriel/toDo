import React from 'react'
import { LocaleContext, LocaleEnum } from './context'

type Props = {
  children: React.ReactNode
  locale: LocaleEnum
}

const LocaleProvider: React.FC<Props> = ({ children, locale }) => {
  return (
    <LocaleContext.Provider value={{ locale: locale || 'en' }}>
      {children}
    </LocaleContext.Provider>
  )
}

export default LocaleProvider
