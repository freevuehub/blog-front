import React from 'react'
import { css, Theme, useTheme } from '@emotion/react'
import dayjs from 'dayjs'
import { IPostListItem } from '~/types'
import { breakPoint } from '~/lib'
import { LazyImage } from './'

const ImageWrapCss = (theme: Theme) => css`
  width: 220px;
  height: 124px;
  position: relative;
  box-shadow: ${theme.shadow.material};
  margin-right: 25px;
  overflow: hidden;
  .image {
    object-fit: cover;
  }

  @media (max-width: ${breakPoint.tabletAir}) {
    width: 160px;
    height: 90px;
  }
  @media (max-width: 600px) {
    width: 120px;
    height: 67.5px;
    margin-right: 15px;
  }
`
const TextWrapCss = (theme: Theme) => css`
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
    color: ${theme.text};
    font-size: 24px;
    cursor: pointer;
    span {
      background-image: linear-gradient(180deg, transparent 89%, #6bb3b8 0);
      background-repeat: no-repeat;
      background-size: 0 100%;
      transition: background-size .6s ease;
      position: relative;
    }
  }
  p {
    margin-top: 10px;
    font-size: 14px;
    line-height: 17px;
    color: ${theme.text};
    opacity: 0.8;
  }
  .text-datetime {
    color: ${theme.text};
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
  const theme = useTheme()

  return (
    <>
      {
        (props.item.image && !props.mini) && (
          <div css={ImageWrapCss(theme)} className="img-wrap">
            <LazyImage className="image" src={`${props.item.image}?size=small`} />
          </div>
        )
      }
      <div css={TextWrapCss(theme)} className={`text-wrap ${props.mini ? 'mini' : ''}`}>
        <span className="text-category">{props.item.category}</span>
        <h1>
          <span>{props.item.title}</span>
        </h1>
        {
          props.mini || (<p>{props.item.description}</p>)
        }
        <span className="text-datetime">{dayjs(props.item.createDate, 'YYYY-MM-DD HH:mm').format('MMM DD, YYYY')}</span>
      </div>
    </>
  )
}

export default PostListItem
