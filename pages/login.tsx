import React from 'react'
import { css, Theme, useTheme } from '@emotion/react'
import Link from 'next/link'
import { breakPoint } from '~/lib'
import { KakaoAuth } from '~/components'

const PageWrapCss = css`
  display: flex;
  width: 100%;
  min-height: calc(100vh - 180px);
  align-items: center;
  justify-content: center;
  
  @media (max-width: ${breakPoint.mobile}) {
    min-height: calc(100vh - 220px);
  }
`
const LoginCardCss = (theme: Theme) => css`
    padding: 20px;
    box-shadow: ${theme.shadow.new};
    color: ${theme.text};
    .button-wrap {
      margin: 20px 0;
      padding: 20px 0;
      border-top: 1px solid ${theme.table.border};
      border-bottom: 1px solid ${theme.table.border};
    }
    .info {
      display: flex;
      a {
        margin-left: auto;
        text-decoration: underline;
        color: ${theme.primary};
      }
    }
`

const LoginPage = () => {
  const theme = useTheme()

  return (
    <article css={PageWrapCss}>
      <div css={LoginCardCss(theme)}>
        <h1>Login</h1>
        <div className="button-wrap">
          <KakaoAuth />
        </div>
        <div className="info">
          <Link href={{ pathname: '/privacy' }}>개인정보취급방침</Link>
        </div>
      </div>
    </article>
  )
}

export default  LoginPage
