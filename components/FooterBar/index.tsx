import React from 'react'
import styled from '@emotion/styled'
// import Link from 'next/link'
import { breakPoint } from '../../lib'
import SocialArea  from './SocialArea'
import {ITheme} from "../../types";

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
    max-width: ${breakPoint.tabletPro};
    margin: 0 auto;
    .right-side {
      a {
        font-size: 12px;
        opacity: .5;
        margin-right: 10px;
        ${(props: ITheme) => ({
          color: props.theme?.text
        })}
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
  return (
    <FooterStyled>
      <div className="inner">
        <SocialArea />
        <div className="right-side">
          {/*<Link href="/privacy">개인정보처리방침</Link>*/}
          © <b>FreeVue</b>
        </div>
      </div>
    </FooterStyled>
  )
}

export default FooterBar
