import { css, Theme } from '@emotion/react'

const Markdown = (theme: Theme) => css`
  .article-markdown {
    & > * {
      padding: 3px 2px;
      word-break: break-word;
      color: ${theme.text};
      code {
        font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace;
        line-height: normal;
        background: rgba(135,131,120,.15);
        color: #eb5757;
        border-radius: 3px;
        font-size: 85%;
        padding: .2em .4em;
        word-break: break-word;
        *:first-child {
          margin-left: -0.4em;
        }
      }
    }
    h1 {
      padding: 3px 2px;
      font-size: 40px;
      line-height: 1.3;
      fill: inherit;
    }
    h2 {
      padding: 3px 2px;
      font-size: 24px;
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
    .table-wrap {
      padding: 0;
      overflow-x: auto;
      overflow-y: hidden;
      table {
        border-radius: 3px;
        margin-top: 12px;
        width: auto;
        min-width: 100%;
        th {
          background-color: ${theme.table.background};
          color: ${theme.table.th};
          font-size: 16px;
          line-height: 1.6;
          letter-spacing: -0.009em;
          padding: 0.25rem 0.75rem;
          vertical-align: middle;
          border: 1px solid ${theme.table.border};
          min-width: 4rem;
          white-space: nowrap;
        }
        td {
          background-color: ${theme.table.background};
          color: ${theme.table.td};
          line-height: 1.6;
          letter-spacing: -0.009em;
          padding: 0.25rem 0.75rem;
          vertical-align: middle;
          border: 1px solid ${theme.table.border};
          font-size: 16px;
          white-space: nowrap;
        }
      }
    }
    blockquote {
      margin: 10px 0;
      padding-left: 15px;
      position: relative;
      color: ${theme.primary};
      background-color: ${theme.primary}20;
      border-left: 4px solid ${theme.primary};
      &:before {
        content: '“';
        text-align: center;
        display: block;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        background-color: ${theme.primary};
        font-size: 28px;
        line-height: 36px;
        color: ${theme.white};
        position: absolute;
        top: 13px;
        left: -12px;
      }
    }
    a {
      color: ${theme.text};
      text-decoration: underline;
    }
    hr {
      padding: 0;
      border-bottom: 0;
      border-color: #ffffff50;
    }
  }
`

export default Markdown
