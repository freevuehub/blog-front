import dynamic from 'next/dynamic'
import { NextPage } from 'next'
import { css, Theme, useTheme } from '@emotion/react'
import { client, breakPoint } from '~/lib'
import { posts, topPosts, githubContributions } from '~/gql'
import { IInitialData, IContribution } from '~/types'

const HeadSet = dynamic(import('../components/HeadSet'))
// const MainAreaTitle = dynamic(import('../components/MainAreaTitle'))
// const Featured = dynamic(import('../components/main/Featured'))
const PostList = dynamic(import('../components/PostList'))
// const KakaoAuth = dynamic(import('../components/auth/KakaoAuth'))
const GithubContributions = dynamic(import('../components/GithubContributions'))

const ContentCss = (theme: Theme) => css`
  max-width: ${breakPoint.tabletPro};
  margin: 50px auto;
  flex-wrap: wrap;
  .left-area {
    flex: 1;
    padding-right: 25px;
    margin-right: 25px;
    order: 2;
    border-right: 1px solid ${theme.border.color};
  }
  .right-area {
    margin-top: -145px;
    width: 300px;
    order: 3;
    .button-wrap {
      background-color: ${theme.background.content};
      box-shadow: ${theme.shadow.material};
      margin-bottom: 32px;
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
    .left-area {
      order: 3;
      padding-right: 0;
      margin-right: 0;
      border: 0;
      margin-bottom: 40px;
    }
    .right-area {
      margin-top: 0;
      order: 2;
      width: 100%;
    }
  }
`

const HomePage: NextPage<IInitialData<any>> = ({ initialData }) => {
  const theme = useTheme()
  const weekReduce = (weekPrev: number, weekCur: IContribution) => weekPrev + weekCur.count
  const contributionsCountReduce = (prev: number, cur: IContribution[]) => prev + cur.reduce(weekReduce, 0)
  const totalCount = initialData.contributions.reduce(contributionsCountReduce, 0)
  // const isContributionsCount = initialData.contributions.reduce((prev: number, cur: IContribution[]) => {
  //   return prev + cur.filter((contribution: IContribution) => contribution.count > 0).length
  // }, 0)
  // console.log(totalCount / isContributionsCount)

  return (
    <>
      <HeadSet />
      {/*<Featured list={initialData.post.list.slice(0, 3)} />*/}
      <article css={ContentCss(theme)}>
        <GithubContributions data={initialData.contributions} totalCount={totalCount} />
        <PostList list={initialData.post.list.slice(3)} />
        {/*<div className="left-area">*/}
        {/*  <MainAreaTitle>최신글</MainAreaTitle>*/}
        {/*</div>*/}
        {/*<div className="right-area">*/}
        {/*  {*/}
        {/*    process.env.NODE_ENV === 'development' && (*/}
        {/*      <>*/}
        {/*        <MainAreaTitle>로그인</MainAreaTitle>*/}
        {/*        <div className="button-wrap">*/}
        {/*          <KakaoAuth />*/}
        {/*        </div>*/}
        {/*      </>*/}
        {/*    )*/}
        {/*  }*/}
        {/*  <MainAreaTitle>인기글</MainAreaTitle>*/}
        {/*  <PostList list={initialData.topPost.list} mini />*/}
        {/*</div>*/}
      </article>
    </>
  )
}

HomePage.getInitialProps = async () => {
  try {
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
  } catch (err) {
    console.log('err', err)

    return {
      initialData: {}
    }
  }
}

export default HomePage
