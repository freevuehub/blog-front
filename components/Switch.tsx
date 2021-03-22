import React from 'react'
import { css } from '@emotion/react'

const SwitchWrapCss = css`
  overflow: hidden;
`

const Switch: React.FC = () => {
  return (
    <div css={SwitchWrapCss}>
      <input type="checkbox"/>
    </div>
  )
}

export default Switch
