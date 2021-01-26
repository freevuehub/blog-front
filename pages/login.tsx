import React from 'react'
import styled from '@emotion/styled'
import axios from 'axios'
import Link from 'next/link'
import { breakPoint } from '../lib'
import { ITheme } from '../types'

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
  const onKakaoClick = async (event: React.MouseEvent) => {
    event.preventDefault()

    try {
      const item = await axios.get('https://kauth.kakao.com/oauth/authorize?client_id=181e3e82bc5d11bbc08f3c0eb7b7688b&redirect_uri=http://localhost:7764&response_type=code')

      console.log(item)
    } catch (error) {
      console.dir(error)
    }
  }

  return (
    <PageWrapStyled>
      <LoginCardStyled>
        <h1>Login</h1>
        <div className="button-wrap">
          <button onClick={onKakaoClick}>
            <img src="https://file.freevue.dev/uploads/7b24c616-ee24-4cd2-a7c8-0c728b0a92f0.png?x=300&y=45" alt="" />
          </button>
        </div>
        <div className="info">
          <Link href="/privacy">개인정보취급방침</Link>
        </div>
      </LoginCardStyled>
    </PageWrapStyled>
  )
}

export default  LoginPage
