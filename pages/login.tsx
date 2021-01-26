import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { auth } from '../gql'
import {breakPoint, client} from '../lib'
import { ITheme } from '../types'

interface IKakaoSuccess {
  access_token: string
  expires_in: number
  refresh_token: string
  refresh_token_expires_in: number
  scope: string
  token_type: string
}

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
  const onKakaoClick = (event: React.MouseEvent) => {
    event.preventDefault()

    const { Kakao }: any = window

    if (Kakao) {
      Kakao.Auth.login({
        async success(response: IKakaoSuccess) {
          const {
            data: { authData }
          } = await client.query(auth(response.access_token, 'kakao'))

          console.log(authData)
        },
        fail(error: any) {
          console.error(error)
        },
      })
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
          <Link href={{ pathname: '/privacy' }}>개인정보취급방침</Link>
        </div>
      </LoginCardStyled>
    </PageWrapStyled>
  )
}

export default  LoginPage
