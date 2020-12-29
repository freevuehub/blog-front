import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import ReactMrkdown from 'react-markdown'
import gfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { client } from '../../lib'
import { post } from '../../gql'
import { ITheme } from '../../types'
import { LazyImage } from '../../components'

const PostPageStyled = styled.article`
  margin: 100px auto 0;
  max-width: 968px;
  header {
    max-width: 740px;
    margin: 100px auto 0;
    ${(props: ITheme) => ({
      color: props.theme?.text,
    })}
    h1 {
      padding: 4px 2px;
      font-size: 40px;
    }
    .create-date {
      font-size: 16px;
      line-height: 22px;
      margin-top: 7px;
    }
  }
  .article-markdown {
    margin: 40px auto 120px;
    max-width: 740px;
  }
`

const renderers = {
  code: ({ language, value }: { language: string, value: string }) => {
    return <SyntaxHighlighter style={a11yDark} language={language} children={value} />
  }
}
const PostPage: React.FC = () => {
  const router = useRouter()
  const [data, setData] = useState({
    image: '',
    title: '',
    markdown: '',
    clickCount: 0,
    source: '',
    createDate: '',
    updateDate: '',
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
      <header>
        <h1>{data.title}</h1>
        <p className="create-date">{data.updateDate}</p>
        <LazyImage
          width={740}
          height={416}
          alt={data.title}
          src={data.image}
        />
      </header>
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
