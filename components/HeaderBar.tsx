import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { client } from '../lib'
import { ITheme } from '../types'
import { categories } from '../gql'
import Menu from './Menu'
import SearchInput from './SearchInput'
import Icon from './Icon'

interface IProps {
  className: string
  onClick: Function
  timer: number
}

const HeaderStyled = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  height: 60px;
  z-index: 50;
  display: flex;
  padding: 0 20px;
  align-items: center;
  ${(props: ITheme) => ({
    backgroundColor: props.theme?.background.content,
    color: props.theme?.text,
    boxShadow: props.theme?.shadow.new,
  })}
  h1 {
    font-size: 20px;
    font-weight: 700;
    a {
      ${(props: ITheme) => ({ color: props.theme?.text })}

      @media (min-width: 601px) {
        &:hover {
          transition: color 0.3s;
          ${(props: ITheme) => ({ color: props.theme?.primary })}
        }
      }
    }
  }
  .menu-btn {
    margin-right: auto;
    font-size: 20px;
    ${(props: ITheme) => ({ color: props.theme?.text })}

    @media (min-width: 841px) {
      display: none;
    }
  }
`
const HeaderBar: React.FC<IProps> = (props) => {
  const [list, setList] = useState([])
  const onMenuClick = (event: React.MouseEvent) => {
    event.preventDefault()

    props.onClick()
  }
  const onMenuBgClick = () => {
    props.onClick()
  }

  const getCategories = async () => {
    try {
      const { data } = await client.query(categories())

      setList(data.categories)
    } catch {
      setList([])
    }
  }

  useEffect(() => {
    getCategories()
  })

  return (
    <HeaderStyled>
      <button className="menu-btn" onClick={onMenuClick}>
        <Icon icon={faBars} />
      </button>
      <h1 className="ibmplexsans">
        <Link href="/">FreeVue Blog</Link>
      </h1>
      <Menu
        list={list}
        className={props.className}
        onBgClick={onMenuBgClick}
      />
      <SearchInput />
    </HeaderStyled>
  )
}

export default HeaderBar
