import React from 'react'
import styled from '@emotion/styled'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
// @ts-ignore
import emoji from 'emoji-dictionary'
import { LazyImage } from './'

interface  IProps {
  md: string
  className?: string
}

const ImageWrapStyled = styled(LazyImage)`
  cursor: pointer;
`

const ImageChild = (props: { src: string }) => {
  const onImageClick = () => {
    console.log(props.src)
  }

  return (
    <ImageWrapStyled onClick={onImageClick} src={`${props.src}?size=bigger`} />
  )
}

const renderers = {
  image: (value: any) => /https:\/\/file\.freevue\.dev/g.test(value.src) ? (
    <ImageChild src={value.src} />
  ) : (
    <img src={value.src} alt={value.alt} />
  ),
  text: ({ value }: any) => {
    return value.replace(/:\w+:/gi, (name: string) => emoji.getUnicode(name))
  },
  table: (value: { children: React.ReactChildren }) => {
    return (
      <div className="table-wrap">
        <table>{value.children}</table>
      </div>
    )
  },
  code: ({ language, value }: { language: string, value: string }) => {
    return <SyntaxHighlighter style={a11yDark} language={language} children={value} />
  }
}
const MarkDown: React.FC<IProps> = (props) => {
  return (
    <ReactMarkdown
      renderers={renderers}
      children={props.md}
      className={`article-markdown ${props.className || ''}`}
      plugins={[gfm]}
    />
  )
}

export default MarkDown
