import React from 'react'
import { NextPage, NextPageContext } from 'next'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import { IInitialData } from '../../types'
import { client, breakPoint } from '../../lib'
import { posts, staticPost, category as categoryQuery } from '../../gql'
import {CategoryTitle, PostList, HeadSet, MarkDown} from '../../components'

const CategoryPageStyled = styled.article`
  margin: 0 auto 50px;
  padding-top: 40px;
  max-width: 960px;

  @media (max-width: ${breakPoint.tabletPro}) {
    max-width: 600px;
  }
`

const CategoryPage: NextPage<IInitialData<any>> = ({ initialData }) => {
  const router = useRouter()

  return (
    <CategoryPageStyled>
      <HeadSet
        title={`${router.query.category}`.toUpperCase()}
        description={`${router.query.category}`.toUpperCase()}
      />
      {
        initialData.type === 'post' ? (
          <>
            <CategoryTitle>{router.query.category}<span>({initialData.post.total})</span></CategoryTitle>
            <PostList list={initialData.post.list} />
          </>
        ) : (
          <MarkDown md={initialData.item.markdown} />
        )
      }
    </CategoryPageStyled>
  )
}

CategoryPage.getInitialProps = async (context: NextPageContext) => {
  const { category } = context.query
  const {
    data: {
      category: { type, id },
    },
  } = await client.query(categoryQuery(`${category}`))

  if (type === 'post') {
    const {
      data: { post },
    } = await client.query(posts({
      type: 'category',
      value: category ? `${category}` : '',
    }))

    return {
      initialData: {
        type,
        post
      }
    }
  } else {
    const {
      data: {
        post: {
          list: [item]
        },
      },
    } = await client.query(staticPost({
      type: 'static',
      value: id,
    }))

    return {
      initialData: {
        type,
        item,
      }
    }
  }
}

export default CategoryPage
