import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { client, ITheme } from '../lib'
import { categories } from '../gql'
import Link from 'next/link'
import Menu from './Menu'

const HeaderStyled = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  height: 60px;
  box-shadow: 0 2px 4px -1px rgba(0, 0 ,0, 0.2),
    0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 10px 0 rgba(0, 0, 0, 0.12);
  z-index: 50;
  display: flex;
  padding: 0 20px;
  align-items: center;
  ${(props: ITheme) => ({
    backgroundColor: props.theme?.background.content,
    color: props.theme?.text,
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
`
const HeaderBar: React.FC = () => {
  const [list, setList] = useState([])

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
      <h1 className="ibmplexsans">
        <Link href="/">FreeVue Blog</Link>
      </h1>
      <Menu list={list} />
    </HeaderStyled>
  )
}

export default HeaderBar
