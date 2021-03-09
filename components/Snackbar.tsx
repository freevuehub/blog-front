import React, { useEffect } from 'react'
import { css } from '@emotion/react'

const SnackbarCss = css`
  position: fixed;
  right: 0;
  top: 0;
  background-color: red;
  z-index: 300;
`

const Snackbar: React.FC = () => {
  useEffect(() => {
    window.addEventListener('snackbar', () => {
      console.log('test')
    })
  }, [])

  return (
    <div css={SnackbarCss}>
      tset
    </div>
  )
}

export default Snackbar
