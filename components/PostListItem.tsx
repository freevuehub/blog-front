import React from 'react'
import styled from '@emotion/styled'
import dayjs from 'dayjs'
import { ITheme, IPostListItem } from '../types'
import { breakPoint } from '../lib'
import { LazyImage } from './'

const ImageWrapStyled = styled.div`
  width: 220px;
  height: 124px;
  position: relative;
  box-shadow: ${(props: ITheme) => props.theme?.shadow.material};
  margin-right: 25px;
  overflow: hidden;
  .image {
    object-fit: cover;
  }

  @media (max-width: 840px) {
    width: 160px;
    height: 90px;
  }
  @media (max-width: 600px) {
    border-radius: 10px;
    width: 120px;
    height: 67.5px;
    margin-right: 15px;
  }
`
const TextWrapStyled = styled.div`
  position: relative;
  flex: 1;
  width: 100%;
  .text-category {
    font-size: 12px;
    line-height: 17px;
    color: #8f9698;
    text-transform: uppercase;
    font-weight: 700;
  }
  h1 {
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
    ${(props: ITheme) => ({ color: props.theme?.text })}
    opacity: 0.5;
    font-size: 12px;
  }
  &.mini {
    h3 {
      font-size: 18px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  @media (max-width: ${breakPoint.mobile}) {
    h3 {
      font-size: 18px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    p {
      display: none;
    }
    .text-datetime {
      bottom: -14px;
    }
  }
`

interface IProps {
  item: IPostListItem
  mini: boolean
}

const PostListItem: React.FC<IProps> = (props) => {
  return (
    <>
      {
        (props.item.image && !props.mini) && (
          <ImageWrapStyled className="img-wrap">
            <LazyImage className="image" src={props.item.image} />
          </ImageWrapStyled>
        )
      }
      <TextWrapStyled className={`text-wrap ${props.mini ? 'mini' : ''}`}>
        <span className="text-category">{props.item.category}</span>
        <h1>{props.item.title}</h1>
        {
          props.mini || (<p>{props.item.description}</p>)
        }
        <span className="text-datetime">{dayjs(props.item.createDate, 'YYYY-MM-DD HH:mm').format('MMM DD, YYYY')}</span>
      </TextWrapStyled>
    </>
  )
}

export default PostListItem
