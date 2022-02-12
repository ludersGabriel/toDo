import React from 'react'
import { AppProps, AppContext } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../styles/global'
import { lightTheme, darkTheme } from '../styles/theme'
import Layout from '../components/layout'
import LocaleProvider from '../context/locale/provider'
import AuthProvider from '../context/auth/provider'
import { LocaleEnum } from '../context/locale/context'
import nookies from 'nookies'
import { useUser } from '../graphql/user/user.query'
import { User } from '../graphql/types'

type Props = AppProps & {
  locale: LocaleEnum
  token: string
  user: User | null
}

const MyApp = ({ Component, pageProps, locale, token, user }: Props) => {
  return (
    <AuthProvider serverToken={token} serverUser={user}>
      <ThemeProvider theme={darkTheme}>
        <LocaleProvider locale={locale}>
          <Layout>
            <Component {...pageProps} />
            <GlobalStyles />
          </Layout>
        </LocaleProvider>
      </ThemeProvider>
    </AuthProvider>
  )
}

MyApp.getInitialProps = async ({ ctx }: AppContext) => {
  const { locale } = ctx

  const { 'toDo-token': token } = nookies.get(ctx)

  let user = null
  try {
    user = await useUser(token)
  } catch {
    user = null
  }

  return {
    locale: locale === 'default' ? 'en' : locale as LocaleEnum,
    token: token ?? null,
    user
  }
}

export default MyApp
