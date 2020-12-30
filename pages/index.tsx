import React, { useState, useEffect } from 'react'
import { Featured } from '../components'
import styled from '@emotion/styled'
import { client } from '../lib'
import { posts } from '../gql'

const ContentStyled = styled.article`
  display: flex;
  max-width: 968px;
  margin: 0 auto;
`

const HomePage: React.FC = () => {
  const [postList, setPostList] = useState([])

  const getMainPost = async () => {
    try {
      const { data } = await client.query(posts({ type: 'main' }))

      console.log(data)
    } catch {
      setPostList([])
    }
  }

  useEffect(() => {
    getMainPost()
  }, [])

  return (
    <>
      <Featured />
      <ContentStyled>
        Hello World!!
      </ContentStyled>
    </>
  )
}

export default HomePage
