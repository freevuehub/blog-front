import React from 'react'
import { css } from '@emotion/react'
import { client } from '~/lib'
import { auth } from '~/gql'

interface IKakaoSuccess {
  access_token: string
  expires_in: number
  refresh_token: string
  refresh_token_expires_in: number
  scope: string
  token_type: string
}

const ButtonCss = css`
  display: block;
  cursor: pointer;
  min-height: 39px;
  img {
    display: block;
    width: 100%;
  }
`

const KakaoAuth: React.FC = () => {
  const onKakaoClick = (event: React.MouseEvent) => {
    event.preventDefault()

    const { Kakao }: any = window

    if (Kakao) {
      Kakao.Auth.login({
        async success(response: IKakaoSuccess) {
          const {
            data: { auth: authData }
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
    <button css={ButtonCss} onClick={onKakaoClick}>
      <img src="https://file.freevue.dev/uploads/7b24c616-ee24-4cd2-a7c8-0c728b0a92f0.png?x=300&y=45" alt="" />
    </button>
  )
}

export default KakaoAuth
