import React from 'react'
import styled from '@emotion/styled'
import FeaturedCard from './FeaturedCard'

const FeaturedStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3,auto);
  grid-template-rows: 250px 250px;
  grid-column-gap: 4px;
  grid-row-gap: 4px;
  margin-bottom: 50px;
`

const Featured: React.FC = () => {
  return (
    <FeaturedStyled>
      <FeaturedCard
        src="https://www.freevue.dev/static/bc9b9b15aadd440ca367c45867830efd/14b42/title.jpg"
        className="main"
        href="/devlog/1"
        title="2019년을 정리하며"
        category="devlog"
      />
      <FeaturedCard
        src="https://www.freevue.dev/static/d2920a81d1349504618540bb47381931/2244e/title.jpg"
        href="/algorithm/1"
        title="2019년을 정리하며"
        category="algorithm"
      />
      <FeaturedCard
        src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb76ef2da-f3fa-4543-bf39-781c6ecc590e%2Fimage.png?table=block&id=2ddddbb4-dd53-409c-804a-6a5137979d4a&width=960&userId=&cache=v2"
        href="/document/1"
        title="2019년을 정리하며"
        category="document"
      />
    </FeaturedStyled>
  )
}

export default Featured
