import React, { useState, useEffect } from 'react'
import { css, Theme, useTheme } from '@emotion/react'
import { NextPage } from 'next'
import Link from 'next/link'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { client, breakPoint } from '~/lib'
import { categories } from '~/gql'
import { Menu, SearchInput, Icon } from './'

export interface IProps {
  className: string
  onClick: Function
  timer: number
}

const HeaderCss = (theme: Theme) => css`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 50;
  padding: 0 20px;
  background-color: ${theme.background.content};
  color: ${theme.text};
  box-shadow: ${theme.shadow.material};
  .inner {
    height: 60px;
    margin: 0 auto;
    max-width: ${breakPoint.tabletPro};
    display: flex;
    align-items: center;
    h1 {
      font-size: 20px;
      font-weight: 700;
      a {
        color: ${theme.text};
        
        @media (min-width: ${breakPoint.mobile}) {
          &:hover {
            transition: color 0.3s;
            color: ${theme.primary};
          }
        }
      }
    }
    .menu-btn {
      margin-right: auto;
      font-size: 20px;
      width: 20px;
      color: ${theme.text};
      
      @media (min-width: ${breakPoint.tabletAir}) {
        display: none;
      }
    }
  }
`

const HeaderBar: NextPage<IProps> = (props) => {
  const theme = useTheme()
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
    <header css={HeaderCss(theme)}>
      <div className="inner">
        <button className="menu-btn" onClick={onMenuClick} aria-label="Menu Button">
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
      </div>
    </header>
  )
}

export default HeaderBar
