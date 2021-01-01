import { css } from '@emotion/react'

export default css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body {
    height: 100%;
    width: 100%;
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
`
