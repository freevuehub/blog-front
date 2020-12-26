import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { ICategory } from '../types'
import { ITheme } from '../lib'

interface IProps {
  list: ICategory[]
}

const MenuStyled = styled.header`
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

    @media (max-width: 840px) {
      display: none;
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
    <MenuStyled>
      <ul className="gmarketsans">
        {props.list.map(listMap)}
      </ul>
    </MenuStyled>
  )
}

export default Menu
