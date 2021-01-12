import React from 'react'
import styled from '@emotion/styled'
import { breakPoint } from '../../lib'
import SocialArea  from './SocialArea'

const FooterStyled = styled.footer`
  background: #000;
  color: #fff;
  min-height: 120px;
  .inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 120px;
    max-width: 968px;
    margin: 0 auto;
  }

  @media (max-width: ${breakPoint.tabletAir}) {
    .inner {
      padding: 0 20px;
    }
  }
  @media (max-width: ${breakPoint.mobile}) {
    .inner {
      flex-direction: column;
      padding: 20px 0;
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
