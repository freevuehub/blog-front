import React from 'react'
import { css, Theme, useTheme } from '@emotion/react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/ko'
import { faShareSquare, faStar } from '@fortawesome/free-solid-svg-icons'
import { Icon } from '../'

dayjs.extend(relativeTime)

interface IProps {
  createDate: string
  updateDate: string
  clickCount: number
  favorite: boolean
}

const PostRemoteWrapCss = (theme: Theme) => css`
  display: flex;
  font-size: 14px;
  line-height: 22px;
  align-items: center;
  color: ${theme.text};
  .date {
    opacity: 0.5;
  }
  .remote {
    border: 2px solid ${theme.text};
    margin-left: auto;
    border-radius: 15px;
    padding: 0 5px 0 10px;
    display: flex;
    .count {
      margin-right: 10px;
    }
    button {
      color: ${theme.text};
      border-left: 1px solid ${theme.text};
      cursor: pointer;
      padding: 0 5px;
      .icon {
        width: 14px;
      }
      &.favorite.on {
        background-color: ${theme.primary};
      }
    }
  }
`

const dateFormat = (date: string) => {
  return dayjs(date, 'YYYY-MM-DD HH:mm').format('MMM DD, YYYY')
}
const PostRemote: React.FC<IProps> = (props) => {
  const theme = useTheme()
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

    alert(`
      주소가 복사되었습니다.
      원하는 곳에 붙여넣기 해주세요.
    `)
  }

  return (
    <div css={PostRemoteWrapCss(theme)}>
      <div className="date">
        {dateFormat(props.createDate)} / {dayjs().locale('ko').to(dayjs(props.updateDate))}
      </div>
      <div className="remote">
        <span className="count">view {props.clickCount}</span>
        <button className={`favorite ${props.favorite ? 'on' : ''}`} onClick={onFavoriteClick}>
          <Icon className="far icon" icon={faStar} />
        </button>
        <button onClick={onShareClick}>
          <Icon className="icon" icon={faShareSquare} />
        </button>
      </div>
    </div>
  )
}

export default PostRemote
