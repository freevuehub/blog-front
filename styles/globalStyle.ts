import { css } from '@emotion/react'

export const GlobalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body {
    font-size: 14px;
    font-weight: 400;
    font-family: 'IBMPlexSansKR';
  }
  ul, ol {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: '62570체';
    font-weight: 400;
  }
  ul, ol {
    list-style: none;
  }
  table {
    border-collapse: collapse;
  }
  code {
    font-family: 'Nanum Gothic Coding', monospace;
  }
  button {
    background-color: transparent;
    border: 0;
    outline: 0;
  }
  .article-markdown {
    & > * {
      padding: 3px 2px;
      word-break: break-word;
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
      border-left: 4px solid $primary-color;
      background-color: primary-color-opacity(20);
      color: $primary-color;
      white-space: nowrap;
      &:before {
        content: '“';
        text-align: center;
        display: block;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        background-color: $primary-color;
        font-size: 28px;
        line-height: 36px;
        color: $white-color;
        position: absolute;
        top: 13px;
        left: -12px;
      }
      p {
        white-space: initial;
      }
    }
    .gatsby-highlight {
      margin: 10px 0;
      border-radius: 3px;
      text-align: left;
      position: relative;
      background-color: rgb(247, 246, 243);
      font-size: 16px;
      pre {
        overflow-x: auto;

        @import './code.scss';
      }
    }
    .language-text {
      font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
      line-height: normal;
      background: rgba(135,131,120,0.15);
      color: #EB5757;
      border-radius: 3px;
      font-size: 85%;
      padding: 0.2em 0.4em;
      white-space: pre-wrap;
      word-break: break-word;
      caret-color: rgb(55, 53, 47);
    }
  }
`
