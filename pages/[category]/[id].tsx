import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styled from '@emotion/styled'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/ko'
import { client } from '../../lib'
import { post } from '../../gql'
import { ITheme } from '../../types'
import { LazyImage, HeadSet, MarkDown } from '../../components'

dayjs.extend(relativeTime)

const PostPageStyled = styled.article`
  margin: 0 auto;
  padding-top: 40px;
  max-width: 960px;
  header {
    max-width: 740px;
    margin: 0 auto;
    ${(props: ITheme) => ({
      color: props.theme?.text,
    })}
    h1 {
      padding: 4px 2px;
      margin: 5px 0;
      font-size: 40px;
      word-break: keep-all;
    }
    .create-date {
      display: flex;
      font-size: 14px;
      line-height: 22px;
      opacity: 0.5;
      align-items: center;
      .count {
        margin-left: auto;
        border: 1px solid #fff;
        border-radius: 15px;
        padding: 0 10px;
      }
    }
    .article-image {
      object-fit: cover;
    }
  }
  .article-markdown {
    margin: 40px auto;
    max-width: 740px;
  }
  footer {
    max-width: 740px;
    margin: 0 auto 120px;
    ${(props: ITheme) => ({
      color: props.theme?.text,
    })}
    a {
      font-style: italic;
      ${(props: ITheme) => ({
        color: props.theme?.primary,
      })}
    }
  }
`

const dateFormat = (date: string) => {
  return dayjs(date, 'YYYY-MM-DD HH:mm').format('MMM DD, YYYY')
}
const PostPage: React.FC = () => {
  const router = useRouter()
  const [data, setData] = useState({
    image: '',
    title: '',
    markdown: '',
    description: '',
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
      <HeadSet
        title={data.title}
        description={data.description}
        image={data.image}
      />
      <header>
        <p className="create-date">
          {dateFormat(data.createDate)} / {dayjs().locale('ko').to(dayjs(data.updateDate))}
          <span className="count">view {data.clickCount}</span>
        </p>
        <h1>{data.title}</h1>
        <LazyImage className="article-image" src={data.image} />
      </header>
      <MarkDown md={data.markdown} />
      <footer>
        {
          data.source && (
            <p>
              출처: <Link href={data.source}>{data.source}</Link>
            </p>
          )
        }
      </footer>
    </PostPageStyled>
  )
}

export default PostPage
