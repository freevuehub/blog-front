import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import styled from '@emotion/styled'
import { client } from '../lib'
import { posts } from '../gql'
import { Featured, PostList, MainAreaTitle } from '../components'
import { ITheme } from '../types'

const ContentStyled = styled.article`
  display: flex;
  max-width: 968px;
  margin: 50px auto 0;
  .left-area {
    flex: 1;
    padding-right: 25px;
    margin-right: 25px;
    ${(props: ITheme) => ({
      borderRight: `1px solid ${props.theme?.border.color}`
    })}
  }
  .right-area {
    width: 300px;
  }
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
      <Head>
        <title>Freevue Blog</title>
      </Head>
      <Featured list={postList.slice(0, 3)} />
      <ContentStyled>
        <div className="left-area">
          <PostList list={postList.slice(3)} />
        </div>
        <div className="right-area">
          <MainAreaTitle>인기글</MainAreaTitle>
          <PostList list={postList.slice(3)} />
        </div>
      </ContentStyled>
    </>
  )
}

export default HomePage
