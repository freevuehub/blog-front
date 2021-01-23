import React from 'react'
import { NextPage, NextPageContext } from 'next'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import { client } from '../../lib'
import { posts } from '../../gql'
import { IPostListItem, IInitialData } from '../../types'
import { PostList, CategoryTitle, HeadSet } from '../../components'

const SearchPageStyled = styled.article`
  margin: 0 auto;
  padding-top: 40px;
  max-width: 968px;
`

const SearchPage: NextPage<IInitialData<{ list: IPostListItem[] }>> = ({ initialData }) => {
  const router = useRouter()

  return (
    <SearchPageStyled>
      <HeadSet
        title={`${router.query.q}에 대한 검색`}
        description={`${router.query.q}에 대한 검색결과입니다.`}
      />
      <CategoryTitle>"{router.query.q}"<span>에 대한 검색결과</span></CategoryTitle>
      <PostList list={initialData.list} />
    </SearchPageStyled>
  )
}

SearchPage.getInitialProps = async (context: NextPageContext) => {
  const { data } = await client.query(
    posts({ type: 'search', value: `${context.query.q}` })
  )

  return {
    initialData: data.post,
  }
}

export default SearchPage
