import React, { useEffect } from 'react'
import { LocaleContext, LocaleEnum } from './context'

type Props = {
  children: React.ReactNode
  locale: LocaleEnum
}

const LocaleProvider: React.FC<Props> = ({ children, locale }) => {
  useEffect(() => {
    console.log(`locale from locale provider: ${locale}`)
  }, [])

  return (
    <LocaleContext.Provider value={{ locale }}>
      {children}
    </LocaleContext.Provider>
  )
}

export default LocaleProvider
