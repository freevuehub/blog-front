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
    top: 0;
    border-radius: 0;
    transform: translate(0) translateZ(0) scale(1);
    &.on {
      position: fixed;
      height: 100vh;
      overflow: hidden;
      width: 100vw;
      top: 50%;
      transform: translate(50%, -50%) translateZ(0) scale(0.6);
      box-shadow: 25px 25px 50px #bcbcbc, -25px -25px 50px #fefefe;
      border-radius: 50px;
    }
    &.move {
      border-radius: 0;
      box-shadow: 25px 25px 50px #bcbcbc, -25px -25px 50px #fefefe;
      position: fixed;
      height: 100vh;
      overflow: hidden;
      width: 100vw;
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
      setMenu('move')

      setTimeout(() => {
        setMenu('')
      }, timer)
    } else {
      setMenu('on')
    }
  }

  return (
    <WrapStyled>
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
