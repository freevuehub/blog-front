import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { ITheme, IPostListItem } from '~/types'
import { PostListItem } from './'
import { breakPoint } from '~/lib'

interface IProps {
  list: IPostListItem[]
  mini?: boolean
}

const PostListStyled = styled.ul`
  li {
    padding: 25px 0;
    border-bottom: 1px solid ${(props: ITheme) => props.theme?.border.color};
    a {
      display: flex;

      @media (min-width: ${breakPoint.mobile}) {
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
    &.mini {
      padding: 20px 0;
    }
  }
`

const PostList: React.FC<IProps> = (props) => {
  return (
    <PostListStyled>
      {
        props.list.map((item: IPostListItem) => (
          <li key={item.id} className={props.mini ? 'mini' : ''}>
            <Link href={`/${item.category}/${item.id}`}>
              <a>
                <PostListItem item={item} mini={!!props.mini} />
              </a>
            </Link>
          </li>
        ))
      }
    </PostListStyled>
  )
}

export default PostList
