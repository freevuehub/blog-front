import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { ICategory } from '../types'
import { ITheme } from '../types'
import { breakPoint } from '../lib'
import SearchInput from './SearchInput'

interface IProps {
  list: ICategory[]
  className: string
  onBgClick: Function
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

        @media (min-width: ${breakPoint.mobile}) {
          &:hover {
            transition: color 0.3s;
            ${(props: ITheme) => ({ color: props.theme?.primary })}
          }
        }
      }
    }
  }

  @media (min-width: ${breakPoint.mobile}) {
    display: flex;
    align-items: center;
    .search-wrap {
      display: none;
    }
  }
  @media (max-width: ${breakPoint.tabletAir}) {
    display: none;
    transition: all 0.3s;
    transform: translateX(-80%);
    opacity: 0;
    &.on, &.move-in, &.move-out {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    &.on {
      transform: translateX(0);
      opacity: 1;
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
      li {
        margin: 20px 0;
        padding-left: 30px;
        a {
          font-size: 18px;
        }
      }
    }
  }
  @media (max-width: ${breakPoint.mobile}) {
    &.on, &.move-in, &.move-out {
      .search-wrap {
        display: block;
      }
    }
    .search-wrap {
      margin-left: 30px;
      margin-bottom: 40px;
      width: 45vw;
    }
  }
`

const listMap = (item: ICategory) => {
  const onMenuClick = (event: React.MouseEvent) => {
    event.stopPropagation()
  }

  return (
    <li key={item.id} onClick={onMenuClick}>
      <Link href={`/${item.name}`}>{item.name}</Link>
    </li>
  )
}
const Menu: React.FC<IProps> = (props) => {
  const onMenuBgClick = () => {
    props.onBgClick()
  }

  return (
    <MenuStyled className={props.className} onClick={onMenuBgClick}>
      <SearchInput className="search-wrap" />
      <ul className="gmarketsans">
        {props.list.map(listMap)}
      </ul>
    </MenuStyled>
  )
}

export default Menu
