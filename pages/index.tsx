import React  from 'react'
import dynamic from 'next/dynamic'
import { NextPage } from 'next'
import styled from '@emotion/styled'
import { client, breakPoint } from '../lib'
import { posts, topPosts, githubContributions } from '../gql'
import { ITheme, IInitialData } from '../types'

const HeadSet = dynamic(import('../components/HeadSet'))
const MainAreaTitle = dynamic(import('../components/MainAreaTitle'))
const Featured = dynamic(import('../components/main/Featured'))
const PostList = dynamic(import('../components/PostList'))
const KakaoAuth = dynamic(import('../components/auth/KakaoAuth'))
const GithubContributions = dynamic(import('../components/GithubContributions'))

const ContentStyled = styled.article`
  display: flex;
  max-width: 960px;
  margin: 50px auto;
  flex-wrap: wrap;
  #github-container {
    width: 100%;
    .js-calendar-graph {
      padding: 0;
      height: 100%;
    }
    .contrib-footer {
      display: none;
    }
  }
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
    .button-wrap {
      ${(props: ITheme) => ({
        backgroundColor: props.theme?.background.content,
        boxShadow: props.theme?.shadow.material,
      })}
      margin-bottom: 30px;
      display: flex;
      padding: 20px;
      flex-direction: column;
      justify-content: center;
    }
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
    flex-direction: column-reverse;
    .left-area {
      padding-right: 0;
      margin-right: 0;
      border: 0;
      margin-bottom: 40px;
    }
    .right-area {
      width: 100%;
    }
  }
`

const HomePage: NextPage<IInitialData<any>> = ({ initialData }) => (
  <>
    <HeadSet />
    <Featured list={initialData.post.list.slice(0, 3)} />
    <ContentStyled>
      <div style={{ width: '100%' }}>
        <GithubContributions data={initialData.contributions} />
      </div>
      <div className="left-area">
        <MainAreaTitle>최신글</MainAreaTitle>
        <PostList list={initialData.post.list.slice(3)} />
      </div>
      <div className="right-area">
        <MainAreaTitle>로그인</MainAreaTitle>
        <div className="button-wrap">
          <KakaoAuth />
        </div>
        <MainAreaTitle>인기글</MainAreaTitle>
        <PostList list={initialData.topPost.list} mini />
      </div>
    </ContentStyled>
  </>
)

HomePage.getInitialProps = async () => {
  const {
    data: { post }
  } = await client.query(posts({ type: 'main' }))
  const {
    data: { post: topPost }
  } = await client.query(topPosts())
  const {
    data: { githubContributions: { contributions } }
  } = await client.query(githubContributions({ name: 'freevuehub' }))

  return {
    initialData: {
      topPost,
      post,
      contributions,
    }
  }
}

export default HomePage
