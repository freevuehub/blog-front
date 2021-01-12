import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import { client, breakPoint } from '../../lib'
import { posts } from '../../gql'
import { CategoryTitle, PostList, HeadSet } from '../../components'

interface IPostListItem {
  id: string
  category: string
  image: string
  title: string
  description: string
  createDate: string
}

const CategoryPageStyled = styled.article`
  margin: 0 auto;
  padding-top: 40px;
  max-width: 960px;

  @media (max-width: ${breakPoint.tabletPro}) {
    max-width: 600px;
  }
`

const CategoryPage: React.FC = () => {
  const router = useRouter()
  const [list, setList] = useState<IPostListItem[]>([])
  const [count, setCount] = useState<number>(0)

  const getPosts = async () => {
    try {
      const { data: { post } } = await client.query(posts({
        type: 'category',
        value: router.query.category ? `${router.query.category}` : '',
      }))

      setList(post.list)
      setCount(post.total)
    } catch {
      setList([])
    }
  }

  useEffect(() => {
    getPosts()
  }, [router.query.category])

  return (
    <CategoryPageStyled>
      <HeadSet
        title={`${router.query.category}`.toUpperCase()}
        description={`${router.query.category}`.toUpperCase()}
      />
      <CategoryTitle>{router.query.category}<span>({count})</span></CategoryTitle>
      <PostList list={list} />
    </CategoryPageStyled>
  )
}

export default CategoryPage
