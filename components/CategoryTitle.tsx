import React from 'react'
import { css, Theme, useTheme } from '@emotion/react'

const TitleWrapCss = (theme: Theme) => css`
  margin-bottom: 10px;
  h2 {
    color: ${theme.text};
    font-size: 28px;
    text-transform: capitalize;
    span {
      font-size: 20px;
    }
  }
`

const CategoryTitle: React.FC = (props) => {
  const theme = useTheme()

  return (
    <div css={TitleWrapCss(theme)}>
      <h2>{props.children}</h2>
    </div>
  )
}

export default CategoryTitle
