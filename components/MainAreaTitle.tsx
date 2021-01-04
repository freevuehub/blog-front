import React from 'react'
import styled from '@emotion/styled'
import { ITheme } from '../types'

const TitleStyled = styled.h1`
  ${(props: ITheme) => ({
    backgroundColor: props.theme?.primary,
    color: props.theme?.white
  })}
  line-height: 34px;
  padding: 0 14px;
`

const MainAreaTitle: React.FC = (props) => {
  return (
    <TitleStyled>{props.children}</TitleStyled>
  )
}

export default MainAreaTitle
