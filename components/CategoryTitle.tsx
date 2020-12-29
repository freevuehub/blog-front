import React from 'react'
import styled from '@emotion/styled'
import { ITheme } from '../types'

const TitleWrapStyled = styled.div`
  margin-bottom: 10px;
  h2 {
    color: ${(props: ITheme) => props.theme?.text};
    font-size: 28px;
    text-transform: capitalize;
  }
`

const CategoryTitle: React.FC = (props) => {
  return (
    <TitleWrapStyled>
      <h2>{props.children}</h2>
    </TitleWrapStyled>
  )
}

export default CategoryTitle
