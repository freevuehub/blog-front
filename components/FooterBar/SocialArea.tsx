import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { Icon } from '../'
import { faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

interface ISns {
  name: string
  to: string
  icon: any
}

const SocialAreaStyled = styled.footer`
  h3 {
    color: hsla(0,0%,100%,.5);
    font-size: 21px;
    font-weight: 700;
  }
  ul {
    margin-top: 10px;
    display: flex;
    li {
      margin-right: 8px;
      a {
        border-radius: 50%;
        width: 38px;
        height: 38px;
        background-color: #44424a;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        transition: all .3s;
        font-size: 16px;
        transition: all 0.3s;
        &.youtube:hover {
          background-color: #ff0000;
        }
        &.linkedin:hover {
          background-color: #0077b5;
        }
      }
    }
  }
`

const snsList: ISns[] = [
  {
    name: 'youtube',
    to: 'https://www.youtube.com/channel/UCkZCZu6eLLDGiuVr5O3awgw',
    icon: faYoutube,
  },
  {
    name: 'linkedin',
    to: 'https://www.linkedin.com/in/%EC%84%B1%EC%A4%80-%ED%99%8D-6bb854171/',
    icon: faLinkedinIn,
  },
]
const snsMap = (item: ISns) => {
  return (
    <li key={item.name}>
      <a href={item.to} className={item.name} target="_blank" rel="noopener noreferrer">
        <Icon icon={item.icon} />
      </a>
    </li>
  )
}
const SocialArea: React.FC = () => {
  return (
    <SocialAreaStyled>
      <h3 className="ibmplexsans">Follow Us</h3>
      <ul>
        {snsList.map(snsMap)}
      </ul>
    </SocialAreaStyled>
  )
}

export default SocialArea
