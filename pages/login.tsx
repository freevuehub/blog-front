import styled from '@emotion/styled'
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
  width: 100%;
  max-width: 600px;
  ${(props: ITheme) => ({
    boxShadow: props.theme?.shadow.new,
    color: props.theme?.text,
  })}
`

const LoginPage = () => {
  return (
    <PageWrapStyled>
      <LoginCardStyled>
        <h1>Login</h1>
        <hr />
      </LoginCardStyled>
    </PageWrapStyled>
  )
}

export default  LoginPage
