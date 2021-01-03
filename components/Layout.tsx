import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { HeaderBar, FooterBar } from '../components'
import styled from '@emotion/styled'
import { ITheme } from '../types'

const timer = 500
const WrapStyled = styled.div`
  ${(props: ITheme) => ({ backgroundColor: props.theme?.background.app })}

  @media (max-width: 840px) {
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
    width: 100%;
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
  const router = useRouter()
  const [menu, setMenu] = useState<string>('')
  const [scrollY, setScrollY] = useState<number>(0)
  const onMenuClick = () => {
    if (menu) {
      const moveTo = scrollY

      setMenu('move-out')

      setTimeout(() => {
        setMenu('')
        setScrollY(0)
        window.scrollTo(0, moveTo)
      }, timer)
    } else {
      const moveTo = window.scrollY

      setMenu('move-in')
      setScrollY(moveTo)

      setTimeout(() => {
        setMenu('on')
      }, timer)
    }
  }

  useEffect(() => {
    setScrollY(0)
  }, [router])

  return (
    <WrapStyled className={menu}>
      <HeaderBar
        onClick={onMenuClick}
        className={menu}
        timer={timer}
      />
      <SectionStyled className={menu}>
        <main className="container" style={{ marginTop: `-${scrollY}px` }}>
          {props.children}
        </main>
        <FooterBar />
      </SectionStyled>
    </WrapStyled>
  )
}

export default Layout
