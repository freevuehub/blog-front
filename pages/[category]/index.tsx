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
  const category = `${router.query.category}`.toUpperCase()
  const { list, total } = initialData.post

  return (
    <CategoryPageStyled>
      <HeadSet title={category} description={category} />
      {
        initialData.type === 'post' ? (
          <>
            <CategoryTitle>
              {router.query.category}<span>({total})</span>
            </CategoryTitle>
            <PostList list={list} />
          </>
        ) : (
          <MarkDown md={list[0].markdown} />
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

  const { data } = await client.query(
    type === 'post' ? posts({
      type: 'category',
      value: category ? `${category}` : '',
    }) : staticPost({
      type: 'static',
      value: id,
    })
  )

  return {
    initialData: {
      type,
      post: data.post,
    }
  }
}

export default CategoryPage
