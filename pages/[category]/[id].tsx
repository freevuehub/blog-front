import React, { useState } from 'react'
import { NextPage, NextPageContext } from 'next'
import Link from 'next/link'
import styled from '@emotion/styled'
import { client } from '../../lib'
import { post } from '../../gql'
import { ITheme, IPostDetail, IInitialData } from '../../types'
import { LazyImage, HeadSet, MarkDown, PostRemote } from '../../components'

const PostPageStyled = styled.article`
  margin: 0 auto;
  padding-top: 40px;
  max-width: 960px;
  header {
    max-width: 740px;
    margin: 0 auto;
    ${(props: ITheme) => ({
      color: props.theme?.text,
    })}
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
      ${(props: ITheme) => ({
        color: props.theme?.text,
      })}
      margin-bottom: 20px;
      word-break: break-all;
      a {
        font-style: italic;
        ${(props: ITheme) => ({
          color: props.theme?.primary,
        })}
      }
    }
  }
`

const PostPage: NextPage<IInitialData<IPostDetail>> = ({ initialData }) => {
  const [isFavorite] = useState<boolean>(false)

  return (
    <PostPageStyled>
      <HeadSet
        title={initialData.title}
        description={initialData.description}
        image={initialData.image}
      />
      <header>
        <PostRemote
          createDate={initialData.createDate}
          updateDate={initialData.updateDate}
          clickCount={initialData.clickCount}
          favorite={isFavorite}
        />
        <h1>{initialData.title}</h1>
        <LazyImage className="article-image" src={initialData.image} />
      </header>
      <MarkDown md={initialData.markdown} />
      <footer>
        {
          initialData.source && (
            <p>
              출처: <Link href={initialData.source}>{initialData.source}</Link>
            </p>
          )
        }
        <PostRemote
          createDate={initialData.createDate}
          updateDate={initialData.updateDate}
          clickCount={initialData.clickCount}
          favorite={isFavorite}
        />
      </footer>
    </PostPageStyled>
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
