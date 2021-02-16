import React, { useEffect } from 'react'
import styled from '@emotion/styled'

const SnackBarWrapStyled = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  background-color: red;
  z-index: 300;
`

const SnackBar: React.FC = () => {
  useEffect(() => {
    window.addEventListener('snackbar', () => {
      console.log('test')
    })
  }, [])

  return (
    <SnackBarWrapStyled>
      tset
    </SnackBarWrapStyled>
  )
}

export default SnackBar
