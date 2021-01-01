import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { ICategory } from '../types'
import { ITheme } from '../types'

interface IProps {
  list: ICategory[]
  className: string
  timer: number
}

const MenuStyled = styled.div`
  margin-left: auto;
  ul {
    display: flex;
    li {
      margin-left: 24px;
      a {
        text-transform: capitalize;
        ${(props: ITheme) => ({ color: props.theme?.text })}

        @media (min-width: 601px) {
          &:hover {
            transition: color 0.3s;
            ${(props: ITheme) => ({ color: props.theme?.primary })}
          }
        }
      }
    }
  }

  @media (max-width: 840px) {
    display: none;
    &.on {
      display: block;
      ul {
        li {
          transition-delay: 1s;
          transform: translateX(0);
          opacity: 1;
        }
      }
    }
    position: fixed;
    left: 0;
    top: 60px;
    width: 100%;
    padding-bottom: 60px;
    height: calc(100vh - 60px);
    ul {
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      height: 100%;
      li {
        transition: all 0.3s;
        transition-delay: 0;
        transform: translateX(-50%);
        opacity: 0;
        margin: 20px 0;
        padding-left: 30px;
        a {
          font-size: 18px;
        }
      }
    }
  }
`

const listMap = (item: ICategory) => {
  return (
    <li key={item.id}>
      <Link href={`/${item.name}`}>{item.name}</Link>
    </li>
  )
}
const Menu: React.FC<IProps> = (props) => {
  return (
    <MenuStyled className={props.className}>
      <ul className="gmarketsans">
        {props.list.map(listMap)}
      </ul>
    </MenuStyled>
  )
}

export default Menu
