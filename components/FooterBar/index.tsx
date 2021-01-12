import React from 'react'
import styled from '@emotion/styled'
import { breakPoint } from '../../lib'
import SocialArea  from './SocialArea'

const FooterStyled = styled.footer`
  background: #000;
  color: #fff;
  min-height: 120px;
  padding: 0 20px;
  .inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 120px;
    max-width: 960px;
    margin: 0 auto;
  }

  @media (max-width: ${breakPoint.mobile}) {
    .inner {
      flex-direction: column;
    }
  }
`
const FooterBar: React.FC = () => {
  return (
    <FooterStyled>
      <div className="inner">
        <SocialArea />
        <div>© <b>FreeVue</b></div>
      </div>
    </FooterStyled>
  )
}

export default FooterBar
