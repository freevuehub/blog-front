import React from 'react'
import { HeaderBar, FooterBar } from '../components'
import styled from '@emotion/styled'
import { ITheme } from '../lib'

const SectionStyled = styled.section`
  ${(props: ITheme) => ({
    backgroundColor: props.theme?.background.app,
  })}
  .container {
    padding-top: 60px;
    min-height: calc(100vh - 120px);
  }
`

const Layout: React.FC = (props) => {
  return (
    <>
      <HeaderBar />
      <SectionStyled>
        <main className="container">
          {props.children}
        </main>
        <FooterBar />
      </SectionStyled>
    </>
  )
}

export default Layout
