import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { client, breakPoint } from '../lib'
import { posts, topPosts } from '../gql'
import { Featured, PostList, MainAreaTitle, HeadSet } from '../components'
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

  @media (max-width: ${breakPoint.tabletPro}) {
    padding: 0 25px;
  }

  @media (max-width: ${breakPoint.tabletAir}) {
    padding: 0;
    .right-area {
      width: 250px;
    }
  }

  @media (max-width: ${breakPoint.mobile}) {
    flex-direction: column;
    .left-area {
      padding-right: 0;
      margin-right: 0;
      border: 0;
      margin-bottom: 20px;
    }
    .right-area {
      width: 100%;
    }
  }
`

const HomePage: React.FC = () => {
  const [postList, setPostList] = useState([])
  const [topPostList, setTopPostList] = useState([])

  const getMainPost = async () => {
    try {
      const {
        data: { post }
      } = await client.query(posts({ type: 'main' }))
      const {
        data: { post: topPost }
      } = await client.query(topPosts())

      setPostList(post.list)
      setTopPostList(topPost.list)
    } catch {
      setPostList([])
    }
  }

  useEffect(() => {
    getMainPost()
  }, [])

  return (
    <>
      <HeadSet />
      <Featured list={postList.slice(0, 3)} />
      <ContentStyled>
        <div className="left-area">
          <MainAreaTitle>최신글</MainAreaTitle>
          <PostList list={postList.slice(3)} />
        </div>
        <div className="right-area">
          <MainAreaTitle>인기글</MainAreaTitle>
          <PostList list={topPostList} mini />
        </div>
      </ContentStyled>
    </>
  )
}

export default HomePage
