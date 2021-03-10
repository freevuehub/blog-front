import React from 'react'
import { css, Theme, useTheme } from '@emotion/react'
import { LazyImage } from '~/components'

export interface IProps {
  src?: string
}

const CardCss = (theme: Theme) => css`
  width: 220px;
  height: 124px;
  position: relative;
  box-shadow: ${theme.shadow.material};
  margin-right: 25px;
  overflow: hidden;
  border-radius: 30px;
`

const Card: React.FC<IProps> = (props) => {
  const theme = useTheme()

  return (
    <div css={CardCss(theme)}>
      {
        props.src && <LazyImage src={props.src} />
      }
      {props.children}
    </div>
  )
}

export default Card
