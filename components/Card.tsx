import React from 'react'
import { css } from '@emotion/react'

const CardCss = css``

const Card: React.FC = (props) => {
  return (
    <div css={CardCss}>{props.children}</div>
  )
}

export default Card
