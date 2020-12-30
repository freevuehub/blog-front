import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { client } from '../lib'
import { posts } from '../gql'
import { Featured, PostList } from '../components'

const ContentStyled = styled.article`
  max-width: 968px;
  margin: 0 auto;
`

const HomePage: React.FC = () => {
  const [postList, setPostList] = useState([])

  const getMainPost = async () => {
    try {
      const {
        data: { post }
      } = await client.query(posts({ type: 'main' }))

      setPostList(post.list)
    } catch {
      setPostList([])
    }
  }

  useEffect(() => {
    getMainPost()
  }, [])

  return (
    <>
      <Featured list={postList.slice(0, 3)} />
      <ContentStyled>
        <PostList list={postList.slice(3)} />
      </ContentStyled>
    </>
  )
}

export default HomePage
