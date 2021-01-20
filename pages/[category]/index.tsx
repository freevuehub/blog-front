import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import { client, breakPoint } from '../../lib'
import { posts, staticPost, category as categoryQuery } from '../../gql'
import {CategoryTitle, PostList, HeadSet, MarkDown} from '../../components'

interface IPostListItem {
  id: string
  category: string
  image: string
  title: string
  description: string
  createDate: string
}

interface  IStaticItem {
  markdown: string
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
  const [type, setType] = useState<string>('')
  const [staticItem, setStaticItem] = useState<IStaticItem>({
    markdown: ''
  })

  const getPosts = async () => {
    try {
      const { data: { category } } = await client.query(categoryQuery(`${router.query.category}`))

      setType(category.type)

      if (category.type === 'post') {
        const { data: { post } } = await client.query(posts({
          type: 'category',
          value: router.query.category ? `${router.query.category}` : '',
        }))

        setList(post.list)
        setCount(post.total)
      } else {
        const { data:
          {
            post: { list: [item] }
          }
        } = await client.query(staticPost({
          type: 'static',
          value: category.id,
        }))

        setStaticItem(item)
      }
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
      {
        type === 'post' ? (
          <>
            <CategoryTitle>{router.query.category}<span>({count})</span></CategoryTitle>
            <PostList list={list} />
          </>
        ) : (
          <MarkDown md={staticItem.markdown} />
        )
      }
    </CategoryPageStyled>
  )
}

export default CategoryPage
