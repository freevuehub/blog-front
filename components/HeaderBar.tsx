import React, { useState, useEffect } from 'react'
import { client, gql } from '../lib'

const HeaderBar: React.FC = () => {
  const [list, setList] = useState([])

  const getCategories = async () => {
    try {
      const { data } = await client.query({
        query: gql`
          {
            categories {
              id
              name
            }
          }
        `
      })

      setList(data.categories)
    } catch {
      setList([])
    }
  }
  useEffect(() => {
    getCategories()
  })

  return (
    <header>
      <h1>FreeVue Blog</h1>
      <nav>
        <ul>
          {
            list.map((item: any) => {
              return (
                <li key={item.id}>{item.name}</li>
              )
            })
          }
        </ul>
      </nav>
    </header>
  )
}

export default HeaderBar
