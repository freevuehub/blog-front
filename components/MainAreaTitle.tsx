import React from 'react'
import styled from '@emotion/styled'
import { ITheme } from '../types'

const TitleStyled = styled.h1`
  ${(props: ITheme) => ({
    backgroundColor: props.theme?.primary,
  })}
  color: #1d1d1d;
  padding: 0 14px;
  line-height: 34px;
`

const MainAreaTitle: React.FC = (props) => {
  return (
    <TitleStyled>{props.children}</TitleStyled>
  )
}

export default MainAreaTitle
