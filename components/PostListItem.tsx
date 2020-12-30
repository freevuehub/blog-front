import React from 'react'
import styled from '@emotion/styled'
import { ITheme } from '../types'
import { LazyImage } from './'

const ImageWrapStyled = styled.div`
  width: 220px;
  height: 124px;
  position: relative;
  border-radius: 15px;
  box-shadow: ${(props: ITheme) => props.theme?.shadow.new};
  margin-right: 25px;
  overflow: hidden;

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

  @media (max-width: 600px) {
    h3 {
      font-size: 18px;
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
  item: {
    image: string
    title: string
    description: string
    category: string
    createDate: string
  }
}

const PostListItem: React.FC<IProps> = (props) => {
  return (
    <>
      {
        props.item.image && (
          <ImageWrapStyled className="img-wrap">
            <LazyImage
              width="100%"
              src={props.item.image}
              alt={props.item.title}
            />
          </ImageWrapStyled>
        )
      }
      <TextWrapStyled className="text-wrap">
        <span className="text-category">{props.item.category}</span>
        <h3>{props.item.title}</h3>
        <p>{props.item.description}</p>
        <span className="text-datetime">{props.item.createDate}</span>
      </TextWrapStyled>
    </>
  )
}

export default PostListItem
