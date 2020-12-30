import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/ko'
import ReactMrkdown from 'react-markdown'
import gfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { client } from '../../lib'
import { post } from '../../gql'
import { ITheme } from '../../types'
import { LazyImage } from '../../components'

dayjs.extend(relativeTime)

const PostPageStyled = styled.article`
  margin: 0 auto;
  padding-top: 40px;
  max-width: 968px;
  header {
    max-width: 740px;
    margin: 0 auto;
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
    .article-image {
      object-fit: cover;
    }
  }
  .article-markdown {
    margin: 40px auto 120px;
    max-width: 740px;
  }
`

const dateFormat = (date: string) => {
  return dayjs(date, 'YYYY-MM-DD HH:mm').format('MMM DD, YYYY')
}
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
        const {
          data: {
            post: { list: [item] }
          }
        } = await client.query(post(`${router.query.id}`))

        setData(item)
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
        <p className="create-date">
          {dateFormat(data.createDate)} / {dayjs().locale('ko').to(dayjs(data.updateDate))} / {data.clickCount}회
        </p>
        {
          data.image && (
            <LazyImage
              className="article-image"
              width="100%"
              height={416}
              alt={data.title}
              src={data.image}
            />
          )
        }
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
