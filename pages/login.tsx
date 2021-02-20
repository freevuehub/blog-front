import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Link from 'next/link'
import { breakPoint } from '~/lib'
import { ITheme } from '~/types'
import { KakaoAuth } from '../components'

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
const PageWrapStyled = styled.article`
  display: flex;
  width: 100%;
  min-height: calc(100vh - 180px);
  align-items: center;
  justify-content: center;
  
  @media (max-width: ${breakPoint.mobile}) {
    min-height: calc(100vh - 220px);
  }
`
const LoginCardStyled = styled.div`
  padding: 20px;
  ${(props: ITheme) => ({
    boxShadow: props.theme?.shadow.new,
    color: props.theme?.text,
  })}
  .button-wrap {
    margin: 20px 0;
    padding: 20px 0;
    ${(props: ITheme) => ({
      borderTop: `1px solid ${props.theme?.table.border}`,
      borderBottom: `1px solid ${props.theme?.table.border}`
    })}
  }
  .info {
    display: flex;
    a {
      margin-left: auto;
      text-decoration: underline;
      ${(props: ITheme) => ({
        color: props.theme?.primary
      })}
    }
  }
`

const LoginPage = () => {
  return (
    <article css={PageWrapCss}>
      <LoginCardStyled>
        <h1>Login</h1>
        <div className="button-wrap">
          <KakaoAuth />
        </div>
        <div className="info">
          <Link href={{ pathname: '/privacy' }}>개인정보취급방침</Link>
        </div>
      </LoginCardStyled>
    </article>
  )
}

export default  LoginPage
