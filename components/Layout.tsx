import React, { useState } from 'react'
import { HeaderBar, FooterBar } from '../components'
import styled from '@emotion/styled'
import { ITheme } from '../types'

const timer = 500
const WrapStyled = styled.div`
  ${(props: ITheme) => ({ backgroundColor: props.theme?.background.app })}

  @media (max-width: 840px) {
    width: 100vw;
    height: 100vh;
    &.on, &.move-out, &.move-in {
      overflow: hidden;
    }
  }
`
const SectionStyled = styled.section`
  ${(props: ITheme) => ({
    backgroundColor: props.theme?.background.app,
  })}
  .container {
    padding-top: 60px;
    min-height: calc(100vh - 120px);
  }

  @media (max-width: 840px) {
    transition: all ${timer}ms;
    border-radius: 0;
    transform: translateX(0) translateZ(0) scale(1);
    will-change: transform, border-radius box-shadow;
    box-shadow: 0;
    width: 100vw;
    &.on, &.move-in {
      height: 100vh;
      overflow: hidden;
      transform: translateX(50%) translateZ(0) scale(0.6);
      border-radius: 50px;
      ${(props: ITheme) => ({ boxShadow: props.theme?.shadow.background })}
    }
    &.move-out {
      height: 100vh;
      overflow: hidden;
      transform: translateX(0) translateZ(0) scale(1);
      ${(props: ITheme) => ({ boxShadow: props.theme?.shadow.background })}
    }
    .container {
      width: 100%;
      padding: 60px 20px 0;
    }
  }
`

const Layout: React.FC = (props) => {
  const [menu, setMenu] = useState<string>('')
  const onMenuClick = () => {
    if (menu) {
      setMenu('move-out')

      setTimeout(() => {
        setMenu('')
      }, timer)
    } else {
      setMenu('move-in')

      setTimeout(() => {
        setMenu('on')
      }, timer)
    }
  }

  return (
    <WrapStyled className={menu}>
      <HeaderBar
        onClick={onMenuClick}
        className={menu}
        timer={timer}
      />
      <SectionStyled className={menu}>
        <main className="container">
          {props.children}
        </main>
        <FooterBar />
      </SectionStyled>
    </WrapStyled>
  )
}

export default Layout
