import React from 'react'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import { CategoryTitle } from '../../components'

const CategoryPageStyled = styled.article`
  margin: 100px auto 0;
  max-width: 968px;
`

const CategoryPage: React.FC = () => {
  const router = useRouter()

  return (
    <CategoryPageStyled>
      <CategoryTitle>{router.query.category}</CategoryTitle>
    </CategoryPageStyled>
  )
}

export default CategoryPage
