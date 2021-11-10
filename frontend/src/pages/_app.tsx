import React from 'react'
import { AppProps, AppContext } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../styles/global'
import theme from '../styles/theme'
import Layout from '../components/layout'
import LocaleProvider from '../context/locale/provider'
import { LocaleEnum } from '../context/locale/context'

type Props = AppProps & {
  locale: LocaleEnum
}

const MyApp = ({ Component, pageProps, locale }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
          <LocaleProvider locale={locale}>
            <Component {...pageProps} />
            <GlobalStyles />
          </LocaleProvider>
      </Layout>
    </ThemeProvider>
  )
}

MyApp.getInitialProps = async (context: AppContext) => {
  const { locale } = context.ctx

  return {
    locale: locale as LocaleEnum
  }
}

export default MyApp
