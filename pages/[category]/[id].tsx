import React from 'react'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'

const PostPageStyled = styled.article`
  margin: 100px auto 0;
  max-width: 968px;
`

const PostPage: React.FC = () => {
  const router = useRouter()

  return (
    <PostPageStyled>
      {router.query.category}
      {router.query.id}
    </PostPageStyled>
  )
}

export default PostPage
