import React from 'react'
import styled from '@emotion/styled'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/ko'
import { faShareSquare, faStar } from '@fortawesome/free-solid-svg-icons'
import { Icon } from '../'
import { ITheme } from '../../types'

dayjs.extend(relativeTime)

interface IProps {
  createDate: string
  updateDate: string
  clickCount: number
  favorite: boolean
}

const PostRemoteWrapStyled = styled.div`
  display: flex;
  font-size: 14px;
  line-height: 22px;
  opacity: 0.5;
  align-items: center;
  ${(props: ITheme) => ({
    color: props.theme?.text,
  })}
  .remote {
    ${(props: ITheme) => ({
      border: `1px solid ${props.theme?.text}`,
    })}
    margin-left: auto;
    border-radius: 15px;
    padding: 0 5px 0 10px;
    display: flex;
    .count {
      margin-right: 10px;
    }
    button {
      ${(props: ITheme) => ({
        color: props.theme?.text,
        borderLeft: `1px solid ${props.theme?.text}`,
      })}
      cursor: pointer;
      padding: 0 5px;
      .icon {
        width: 14px;
      }
      &.favorite.on {
        ${(props: ITheme) => ({
          backgroundColor: props.theme?.primary,
        })}
      }
    }
  }
`

const dateFormat = (date: string) => {
  return dayjs(date, 'YYYY-MM-DD HH:mm').format('MMM DD, YYYY')
}
const PostRemote: React.FC<IProps> = (props) => {
  const onFavoriteClick = (event: React.MouseEvent) => {
    event.preventDefault()

    alert('미지원 기능입니다.')
  }
  const onShareClick = (event: React.MouseEvent) => {
    event.preventDefault()

    const textField = document.createElement('textarea')

    textField.value = window.location.href

    document.body.append(textField)

    textField.select()
    textField.setSelectionRange(0, 99999)

    document.execCommand('copy')

    textField.remove()
  }

  return (
    <PostRemoteWrapStyled>
      {dateFormat(props.createDate)} / {dayjs().locale('ko').to(dayjs(props.updateDate))}
      <div className="remote">
        <span className="count">view {props.clickCount}</span>
        <button className={`favorite ${props.favorite ? 'on' : ''}`} onClick={onFavoriteClick}>
          <Icon className="icon" icon={faStar} />
        </button>
        <button onClick={onShareClick}>
          <Icon className="icon" icon={faShareSquare} />
        </button>
      </div>
    </PostRemoteWrapStyled>
  )
}

export default PostRemote
