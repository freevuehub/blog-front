import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import { client } from '../../lib'
import { posts } from '../../gql'
import { IPostListItem } from '../../types'
import { PostList, CategoryTitle } from '../../components'

const SearchPageStyled = styled.article`
  margin: 0 auto;
  padding-top: 40px;
  max-width: 968px;
`

const SearchPage: React.FC = () => {
  const router = useRouter()
  const [list, setList] = useState<IPostListItem[]>([])

  const getPosts = async () => {
    try {
      if (router.query.q) {
        const { data: { post } } = await client.query(posts({
          type: 'search',
          value: `${router.query.q}`,
        }))

        console.log(post.list)

        setList(post.list)
      }
    } catch {
      setList([])
    }
  }

  useEffect(() => {
    getPosts()
  }, [router.query.q])

  return (
    <SearchPageStyled>
      <CategoryTitle>"{router.query.q}"<span>에 대한 검색결과</span></CategoryTitle>
      <PostList list={list} />
    </SearchPageStyled>
  )
}

export default SearchPage
