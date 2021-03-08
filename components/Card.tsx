import React from 'react'
import { css, Theme, useTheme } from '@emotion/react'

const CardCss = (theme: Theme) => css`
  width: 220px;
  height: 124px;
  position: relative;
  box-shadow: ${theme.shadow.material};
  margin-right: 25px;
  overflow: hidden;
`

const Card: React.FC = (props) => {
  const theme = useTheme()

  return (
    <div css={CardCss(theme)}>{props.children}</div>
  )
}

export default Card
