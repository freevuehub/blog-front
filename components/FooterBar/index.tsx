import React from 'react'
import { css, Theme, useTheme } from '@emotion/react'
// import Link from 'next/link'
import { breakPoint } from '~/lib'
import SocialArea  from './SocialArea'

const FooterCss = (theme: Theme) => css`
  background-color: #fff;
  color: #2e2e2e;
  min-height: 120px;
  padding: 0 20px;
  .inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 120px;
    max-width: ${breakPoint.tabletPro};
    margin: 0 auto;
    .right-side {
      a {
        font-size: 12px;
        opacity: .5;
        margin-right: 10px;
        color: ${theme.text};
      }
    }
  }

  @media (max-width: ${breakPoint.mobile}) {
    padding: 20px;
    .inner {
      flex-direction: column;
    }
  }
`

const FooterBar: React.FC = () => {
  const theme = useTheme()

  return (
    <footer css={FooterCss(theme)}>
      <div className="inner">
        <SocialArea />
        <div className="right-side">
          {/*<Link href="/privacy">개인정보처리방침</Link>*/}
          © <b>FreeVue</b>
        </div>
      </div>
    </footer>
  )
}

export default FooterBar
