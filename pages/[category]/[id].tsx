import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styled from '@emotion/styled'
import { client } from '../../lib'
import { post } from '../../gql'
import { ITheme } from '../../types'
import { LazyImage, HeadSet, MarkDown, PostRemote } from '../../components'

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
    .article-image {
      object-fit: cover;
    }
  }
  .article-markdown {
    margin: 40px auto;
    max-width: 740px;
  }
  footer {
    border-top: 1px solid #fff;
    padding-top: 10px;
    max-width: 740px;
    margin: 0 auto 120px;
    p {
      ${(props: ITheme) => ({
        color: props.theme?.text,
      })}
      margin-bottom: 20px;
      word-break: break-all;
      a {
        font-style: italic;
        ${(props: ITheme) => ({
          color: props.theme?.primary,
        })}
      }
    }
  }
`

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
  const [isFavorite] = useState<boolean>(false)

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
        <PostRemote
          createDate={data.createDate}
          updateDate={data.updateDate}
          clickCount={data.clickCount}
          favorite={isFavorite}
        />
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
        <PostRemote
          createDate={data.createDate}
          updateDate={data.updateDate}
          clickCount={data.clickCount}
          favorite={isFavorite}
        />
      </footer>
    </PostPageStyled>
  )
}

export default PostPage
