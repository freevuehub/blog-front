import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { ITheme } from '../types'
import { LazyImage, PostListItem } from './'

interface IPostListItem {
  id: string
  category: string
  image: string
  title: string
  description: string
  createDate: string
}

interface IProps {
  list: IPostListItem[]
}

const PostListStyled = styled.ul`
  margin: 5px 0;
  li {
    padding: 25px 0;
    border-bottom: 1px solid ${(props: ITheme) => props.theme?.border.color};
    a {
      display: flex;

      @media (min-width: 601px) {
        &:hover {
          .text-wrap {
            h3 {
              transition: color 0.3s;
              ${(props: ITheme) => ({ color: props.theme?.primary })}
            }
          }
        }
      }
    }
  }
`

const PostList: React.FC<IProps> = (props) => {
  return (
    <PostListStyled>
      {
        props.list.map((item: IPostListItem) => (
          <li key={item.id}>
            <Link href={`/${item.category}/${item.id}`}>
              <a>
                <PostListItem item={item} />
              </a>
            </Link>
          </li>
        ))
      }
    </PostListStyled>
  )
}

export default PostList
