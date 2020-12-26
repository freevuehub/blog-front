import React from 'react'
import styled from '@emotion/styled'
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
`
const FooterBar: React.FC = () => {
  return (
    <FooterStyled>
      <div className="inner">
        <SocialArea />
        <div><b>FreeVue</b> Copyright © {new Date().getFullYear()}</div>
      </div>
    </FooterStyled>
  )
}

export default FooterBar