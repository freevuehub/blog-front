import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import { client } from '../../lib'
import { posts } from '../../gql'
import { CategoryTitle, PostList } from '../../components'

interface IPostListItem {
  id: string
  category: string
  image: string
  title: string
  description: string
  createDate: string
}

const CategoryPageStyled = styled.article`
  margin: 100px auto 0;
  max-width: 968px;
`

const CategoryPage: React.FC = () => {
  const router = useRouter()
  const [list, setList] = useState<IPostListItem[]>([])
  const getPosts = async () => {
    try {
      const { data } = await client.query(posts())

      setList(data.list)
    } catch {

    }
  }

  useEffect(() => {
    getPosts()
  }, [router.query.category])

  return (
    <CategoryPageStyled>
      <CategoryTitle>{router.query.category}</CategoryTitle>
      <PostList list={list} />
    </CategoryPageStyled>
  )
}

export default CategoryPage
