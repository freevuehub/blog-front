import React from 'react'
import styled from '@emotion/styled'
import { IPostListItem } from '../../types'
import FeaturedCard from './FeaturedCard'

interface IProps {
  list: IPostListItem[]
}

const FeaturedStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3,auto);
  grid-template-rows: 250px 250px;
  grid-column-gap: 4px;
  grid-row-gap: 4px;
  margin-bottom: 50px;

  @media (max-width: 1000px) {
    grid-template-rows: 200px 200px;
  }
  @media (max-width: 840px) {
    grid-template-columns: repeat(1, auto);
    grid-template-rows: repeat(3, 270px);
  }
`

const Featured: React.FC<IProps> = (props) => {
  return (
    <FeaturedStyled>
      {
        props.list.map((item: IPostListItem, index: number) => {
          return (
            <FeaturedCard
              key={item.id}
              src={item.image}
              className={index ? '' : 'main'}
              href={`/${item.category}/${item.id}`}
              title={item.title}
              category={item.category}
            />
          )
        })
      }
    </FeaturedStyled>
  )
}

export default Featured
