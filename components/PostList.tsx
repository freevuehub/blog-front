import React from 'react'
import { css, Theme, useTheme } from '@emotion/react'
import Link from 'next/link'
import { IPostListItem } from '~/types'
import { PostListItem } from './'
import { breakPoint } from '~/lib'

interface IProps {
  list: IPostListItem[]
  mini?: boolean
}

const PostListCss = (theme: Theme) => css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 30px;
  li {
    box-shadow: ${theme.shadow.material};
    border-radius: 15px;
    overflow: hidden;
    background-color: #fff;
    a {
      display: block;
    
      @media (min-width: ${breakPoint.mobile}) {
        &:hover {
          .text-wrap {
            h1 {
              span {
                background-size: 100% 100%;
              }
            }
          }
        }
      }
    }
    &.mini {
      padding: 20px 0;
    }
    &:first-child {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 3;
    }
  }
`

const PostList: React.FC<IProps> = (props) => {
  const theme = useTheme()

  return (
    <ul css={PostListCss(theme)}>
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
    </ul>
  )
}

export default PostList
