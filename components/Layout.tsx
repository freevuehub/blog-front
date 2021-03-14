import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { css, Theme, useTheme } from '@emotion/react'
import { HeaderBar, FooterBar } from '~/components'
import { breakPoint } from '~/lib'
import { useScroll } from '~/lib/hooks'

const timer = 500
const WrapCss = (theme: Theme) => css`
  background-color: ${theme.background.app};
  
  @media (max-width: ${breakPoint.tabletAir}) {
    &.on, &.move-out, &.move-in {
      overflow: hidden;
      perspective: 400px;
    }
  }
`

const SectionCss = (theme: Theme) => css`
  background-color: ${theme.background.app};
  .container {
    padding-top: 60px;
    min-height: calc(100vh - 120px);
  }

  @media (max-width: ${breakPoint.tabletAir}) {
    transition: all ${timer}ms;
    border-radius: 0;
    transform: translateX(0) translateZ(0) scale(1) rotateY(0);
    will-change: transform, border-radius box-shadow;
    box-shadow: 0;
    width: 100%;
    &.on, &.move-in {
      height: 100vh;
      overflow: hidden;
      transform: translateX(50%) translateZ(0) scale(0.6) rotateY(-10deg);
      border-radius: 50px;
      box-shadow: ${theme.shadow.background};
    }
    &.on {
      filter: blur(5px);
    }
    &.move-out {
      height: 100vh;
      overflow: hidden;
      transform: translateX(0) translateZ(0) scale(1) rotateY(0);
      box-shadow: ${theme.shadow.background};
    }
    .container {
      width: 100%;
      padding: 60px 20px 0;
    }
  }
  @media (max-width: ${breakPoint.mobile}) {
    .container {
      min-height: calc(100vh - 160px);
    }
  }
`

const Layout: React.FC = (props) => {
  const router = useRouter()
  const theme = useTheme()
  const [menu, setMenu] = useState<string>('')
  const [scrollY, setScrollY] = useState<number>(0)
  const [{ scrollTop }, setScroll] = useScroll('y')

  const onMenuClick = () => {
    setMenu('move-out')

    if (menu) {
      const moveTo = scrollY

      console.log(scrollTop)

      setTimeout(() => {
        setMenu('')
        setScrollY(0)
        setScroll(moveTo)
      }, timer)
    } else {
      const moveTo = scrollTop

      setScroll(0)

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
    <div css={WrapCss(theme)} className={menu}>
      <HeaderBar
        onClick={onMenuClick}
        className={menu}
        timer={timer}
      />
      <section css={SectionCss(theme)} className={menu}>
        <main className="container" style={{ marginTop: `-${scrollY}px` }}>
          {props.children}
        </main>
        <FooterBar />
      </section>
    </div>
  )
}

export default Layout
