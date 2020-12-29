import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { ITheme } from '../types'

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
    border-bottom: 1px solid #e6e6e6;
    a {
      display: flex;
      .img-wrap {
        width: 220px;
        height: 124px;
        position: relative;
        border-radius: 15px;
        box-shadow: 5px 5px 10px #d9d9d9, -5px -5px 10px #fff;
        margin-right: 25px;
        object-fit: cover;
        overflow: hidden;
        img {
          display: block;
          position: absolute;
          top: 0px;
          left: 0px;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
          opacity: 1;
        }
      }
      .text-wrap {
        position: relative;
        flex: 1;
        .text-category {
          font-size: 12px;
          line-height: 17px;
          color: #8f9698;
          text-transform: uppercase;
          font-weight: 700;
        }
        h3 {
          ${(props: ITheme) => ({ color: props.theme?.text })}
          font-size: 24px;
          cursor: pointer;
        }
        p {
          margin-top: 10px;
          font-size: 14px;
          line-height: 17px;
          ${(props: ITheme) => ({ color: props.theme?.text })}
          opacity: 0.8;
        }
        .text-datetime {
          position: absolute;
          right: 0;
          bottom: 0;
          ${(props: ITheme) => ({ color: props.theme?.text })}
          opacity: 0.5;
          font-size: 12px;
        }
      }


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
`

const PostList: React.FC<IProps> = (props) => {
  return (
    <PostListStyled>
      {
        props.list.map((item: IPostListItem) => (
          <li key={item.id}>
            <Link href={`/${item.category}/${item.id}`}>
              <a>
                <div className="img-wrap">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="text-wrap">
                  <span className="text-category">{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span className="text-datetime">{item.createDate}</span>
                </div>
              </a>
            </Link>
          </li>
        ))
      }
    </PostListStyled>
  )
}

export default PostList
