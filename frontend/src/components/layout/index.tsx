import React from 'react'
import { Wrapper, Content } from './styles'
import Header from './header'
import Footer from './footer'

type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Content>
        {children}
      </Content>
    </Wrapper>
  )
}

export default Layout
