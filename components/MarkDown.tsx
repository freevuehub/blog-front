import React from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

interface  IProps {
  md: string
  className?: string
}

const renderers = {
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
