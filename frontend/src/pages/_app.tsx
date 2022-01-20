import React from 'react'
import { AppProps, AppContext } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../styles/global'
import { lightTheme, darkTheme } from '../styles/theme'
import Layout from '../components/layout'
import LocaleProvider from '../context/locale/provider'
import { LocaleEnum } from '../context/locale/context'

type Props = AppProps & {
  locale: LocaleEnum
}

const MyApp = ({ Component, pageProps, locale }: Props) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <LocaleProvider locale={locale}>
        <Layout>
          <Component {...pageProps} />
          <GlobalStyles />
        </Layout>
      </LocaleProvider>
    </ThemeProvider>
  )
}

MyApp.getInitialProps = async (context: AppContext) => {
  const { locale } = context.ctx

  return {
    locale: locale === 'default' ? 'en' : locale as LocaleEnum
  }
}

export default MyApp
