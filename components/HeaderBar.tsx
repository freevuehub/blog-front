import React, { useState, useEffect } from 'react'
import { css, Theme, useTheme } from '@emotion/react'
import { NextPage } from 'next'
import { client, breakPoint } from '~/lib'
import { categories } from '~/gql'
import { Menu, SearchInput } from './'

export interface IProps {
  className: string
  onClick: Function
  timer: number
}

const HeaderCss = (theme: Theme) => css`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 50;
  width: 60px;
  background-color: ${theme.background.content};
  color: ${theme.text};
  padding: 15px 0;
  
  @media (max-width: ${breakPoint.mobile}) {
    background-color: ${theme.background.app};
    bottom: unset;
    width: 100%;
    right: 0;
    padding: 10px 0;
  }
`
const MenuButtonCss = (theme: Theme) => css`
  margin: 0 auto;
  align-items: center;
  font-size: 20px;
  width: 40px;
  height: 40px;
  color: ${theme.text};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  span {
    font-size: 0;
    height: 3px;
    width: 70%;
    background-color: ${theme.text};
    transition: all .3s;
  }
  &.on, &.move-in {
    span {
      &:nth-child(1) {
        transform: translateY(11px) rotate(135deg);
      }
      &:nth-child(2) {
        transform: translateY(-10px) rotate(-135deg);
      }
    }
  }
  
  @media (max-width: ${breakPoint.mobile}) {
    margin: 0 0 0 10px;
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
        <button css={MenuButtonCss(theme)} className={`${props.className} pointer`} onClick={onMenuClick} aria-label="Menu Button">
          <span>Line 1</span>
          <span>Line 2</span>
        </button>
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
