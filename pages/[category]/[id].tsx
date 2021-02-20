import React, { useState } from 'react'
import { NextPage, NextPageContext } from 'next'
import Link from 'next/link'
import { css, Theme, useTheme } from '@emotion/react'
import { client } from '~/lib'
import { post } from '~/gql'
import { IPostDetail, IInitialData } from '~/types'
import { LazyImage, HeadSet, MarkDown, PostRemote } from '~/components'

const PostPageCss = (theme: Theme) => css`
  margin: 0 auto;
  padding-top: 40px;
  max-width: 960px;
  header {
    max-width: 740px;
    margin: 0 auto;
    color: ${theme.text};
    h1 {
      padding: 4px 2px;
      margin: 5px 0;
      font-size: 40px;
      word-break: keep-all;
    }
    .article-image {
      object-fit: cover;
    }
  }
  .article-markdown {
    margin: 40px auto;
    max-width: 740px;
  }
  footer {
    border-top: 1px solid #fff;
    padding-top: 10px;
    max-width: 740px;
    margin: 0 auto 120px;
    p {
      color: ${theme.text};
      margin-bottom: 20px;
      word-break: break-all;
      a {
        font-style: italic;
        color: ${theme.primary};
      }
    }
  }
`

const PostPage: NextPage<IInitialData<IPostDetail>> = ({ initialData }) => {
  const theme = useTheme()
  const [isFavorite] = useState<boolean>(false)
  const { title, description, createDate, updateDate, clickCount, image, markdown, source } = initialData

  return (
    <article css={PostPageCss(theme)}>
      <HeadSet
        title={title}
        description={description}
        image={image}
      />
      <header>
        <PostRemote
          createDate={createDate}
          updateDate={updateDate}
          clickCount={clickCount}
          favorite={isFavorite}
        />
        <h1>{initialData.title}</h1>
        <LazyImage className="article-image" src={`${image}?size=medium`} />
      </header>
      <MarkDown md={markdown} />
      <footer>
        {
          source && (
            <p>
              출처: <Link href={source}>{source}</Link>
            </p>
          )
        }
        <PostRemote
          createDate={createDate}
          updateDate={updateDate}
          clickCount={clickCount}
          favorite={isFavorite}
        />
      </footer>
    </article>
  )
}

PostPage.getInitialProps = async (context: NextPageContext) => {
  const {
    data: {
      post: { list: [item] }
    }
  } = await client.query(post(`${context.query.id}`))
  return {
    initialData: item
  }
}

export default PostPage
