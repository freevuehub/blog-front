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
  li {
    padding: 25px 0;
    border-bottom: 1px solid ${theme.border.color};
    a {
      display: flex;

      @media (min-width: ${breakPoint.mobile}) {
        &:hover {
          .text-wrap {
            h3 {
              transition: color 0.3s;
              color: ${theme.primary};
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
