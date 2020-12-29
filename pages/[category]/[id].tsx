import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import ReactMrkdown from 'react-markdown'
import gfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { client } from '../../lib'
import { post } from '../../gql'

const PostPageStyled = styled.article`
  margin: 100px auto 0;
  max-width: 968px;
  .article-markdown {
    margin: 40px auto 120px;
    max-width: 740px;
  }
`

const renderers = {
  code: ({ language, value }: { language: string, value: string }) => {
    return <SyntaxHighlighter style={dark} language={language} children={value} />
  }
}
const PostPage: React.FC = () => {
  const router = useRouter()
  const [data, setData] = useState({
    title: '',
    markdown: '',
  })

  const getPosts = async () => {
    try {
      if (router.query.id) {
        const { data } = await client.query(post(`${router.query.id}`))

        setData(data.post)
      }
    } catch {

    }
  }

  useEffect(() => {
    getPosts()
  }, [router.query.id])

  return (
    <PostPageStyled>
      {data.title}
      <br/>
      test
      <br/>
      <ReactMrkdown
        renderers={renderers}
        children={data.markdown}
        className="article-markdown"
        plugins={[gfm]}
      />
    </PostPageStyled>
  )
}

export default PostPage
