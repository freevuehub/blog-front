import React from 'react'
import { css } from '@emotion/react'
import { IPostListItem } from '~/types'
import { breakPoint } from '~/lib'
import FeaturedCard from './FeaturedCard'

interface IProps {
  list: IPostListItem[]
}

const FeaturedCss = css`
  display: grid;
  grid-template-columns: repeat(3, 33.333%);
  grid-template-rows: 250px 250px;
  margin-bottom: 50px;

  @media (max-width: ${breakPoint.tabletPro}) {
    grid-template-rows: 200px 200px;
  }
  @media (max-width: ${breakPoint.tabletAir}) {
    grid-template-columns: repeat(1, 100%);
    grid-template-rows: repeat(3, 270px);
  }
`

const Featured: React.FC<IProps> = (props) => {
  return (
    <div css={FeaturedCss}>
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
    </div>
  )
}

export default Featured
