import { css } from '@emotion/react'

const Markdown = (props: any) => css`
  .article-markdown {
    & > * {
      padding: 3px 2px;
      word-break: break-word;
      color: ${props.text};
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
      margin-top: 40px;
    }
    h3 {
      margin: {
        top: 1em;
        bottom: 1px;
      }
      font: {
        weight: 400;
        size: 1.25em;
      }
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
      border: {
        top-right-radius: 0.1875rem;
        bottom-right-radius: 0.1875rem;
      }
      overflow-x: auto;
      margin-top: 0.75rem;
      width: 100%;
      th {
        border-color: #D7E2EB;
        background-color: rgba(50,50,144,0.02);
        color: #263747;
        font-size: 16px;
        line-height: 1.6;
        letter-spacing: -0.009em;
        padding: 0.25rem 0.75rem;
        vertical-align: middle;
        border: 1px solid #D7E2EB;
        min-width: 4rem;
      }
      td {
        border-color: #D7E2EB;
        background-color: rgba(50,50,144,0.02);
        line-height: 1.6;
        letter-spacing: -0.009em;
        padding: 0.25rem 0.75rem;
        vertical-align: middle;
        border: 1px solid #D7E2EB;
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
  }
`

export default Markdown