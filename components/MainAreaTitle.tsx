import React from 'react'
import { css, Theme, useTheme } from '@emotion/react'

const TitleCss = (theme: Theme) => css`
  background-color: ${theme.primary};
  color: #1d1d1d;
  padding: 0 14px;
  line-height: 34px;
`

const MainAreaTitle: React.FC = (props) => {
  const theme = useTheme()

  return (
    <h1 css={TitleCss(theme)}>{props.children}</h1>
  )
}

export default MainAreaTitle
