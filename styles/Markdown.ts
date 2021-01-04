import { css } from '@emotion/react'
import { IThemeSet } from '../types'

const Markdown = (props: IThemeSet) => css`
  .article-markdown {
    & > * {
      padding: 3px 2px;
      word-break: break-word;
      color: ${props.text};
      code {
        font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;
        line-height: normal;
        background: rgba(135,131,120,.15);
        color: #eb5757;
        border-radius: 3px;
        font-size: 85%;
        padding: .2em .4em;
        word-break: break-word;
      }
    }
    h1 {
      margin: {
        top: 2em;
        bottom: 4px;
      }
      font: {
        size: 1.875em;
      }
      line-height: 1.3;
      fill: inherit;
    }
    h2 {
      font-size: 1.5em;
      margin-top: 40px;
    }
    h3 {
      margin-top: 25px;
      font-size: 1.25em;
      line-height: 1.3;
    }
    p {
      margin: {
        top: 1px;
        bottom: 1px;
      }
      padding: {
        left: calc(96px + env(safe-area-inset-left));
        right: calc(96px + env(safe-area-inset-right));
      }
      font-size: 16px;
      line-height: 24px;
      padding: 4px 2px;
      margin: 4px 0;
      img {
        display: block;
        margin: auto;
        max-width: 100%;
      }
    }
    ol {
      list-style: decimal;
    }
    ul {
      list-style: square;
    }
    ol,
    ul {
      padding-left: 28px;
      white-space: initial;
      li {
        margin: {
          top: 1px;
          bottom: 1px;
        }
        padding: {
          left: calc(96px + env(safe-area-inset-left));
          right: calc(96px + env(safe-area-inset-right));
        }
        padding: 3px 2px;
        text-align: left;
        font-size: 16px;
        line-height: 1.8;
      }
    }
    table {
      border-radius: 3px;
      overflow-x: auto;
      margin-top: 12px;
      width: 100%;
      th {
        background-color: ${props.table.background};
        color: ${props.table.th};
        font-size: 16px;
        line-height: 1.6;
        letter-spacing: -0.009em;
        padding: 0.25rem 0.75rem;
        vertical-align: middle;
        border: 1px solid ${props.table.border};
        min-width: 4rem;
      }
      td {
        background-color: ${props.table.background};
        color: ${props.table.td};
        line-height: 1.6;
        letter-spacing: -0.009em;
        padding: 0.25rem 0.75rem;
        vertical-align: middle;
        border: 1px solid ${props.table.border};
        font-size: 16px;
      }
    }
    blockquote {
      margin: 10px 0;
      padding-left: 15px;
      position: relative;
      color: ${props.primary};
      background-color: ${props.primary}20;
      border-left: 4px solid ${props.primary};
      &:before {
        content: '“';
        text-align: center;
        display: block;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        background-color: ${props.primary};
        font-size: 28px;
        line-height: 36px;
        color: ${props.white};
        position: absolute;
        top: 13px;
        left: -12px;
      }
    }
    a {
      color: ${props.text};
      text-decoration: underline;
    }
  }
`

export default Markdown