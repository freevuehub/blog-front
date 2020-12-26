import React from 'react'
import { Featured } from '../components'
import styled from '@emotion/styled'

const ContentStyled = styled.article`
  display: flex;
  max-width: 968px;
  margin: 0 auto;
`

const HomePage: React.FC = () => {
  return (
    <>
      <Featured />
      <ContentStyled>
        Hello World!!
      </ContentStyled>
    </>
  )
}

export default HomePage
