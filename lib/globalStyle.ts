import { css } from '@emotion/react'

export interface ITheme {
  theme?: {
    primary: string
    background: {
      app: string
      content: string
    }
    text: string
  }
}

export const GlobalStyle = css`
  @import url(//fonts.googleapis.com/earlyaccess/nanumgothiccoding.css);

  @font-face {
    font-family: '62570체';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.3/62570체.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'GmarketSans';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'IBMPlexSansKR';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'IBMPlexSansKR';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'IBMPlexSansKR';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'IBMPlexSansKR';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-Text.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'IBMPlexSansKR';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-Regular.woff') format('woff');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'IBMPlexSansKR';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-Light.woff') format('woff');
    font-weight: 200;
    font-style: normal;
  }
  @font-face {
    font-family: 'IBMPlexSansKR';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-ExtraLight.woff') format('woff');
    font-weight: 100;
    font-style: normal;
  }

  .nanumgothiccoding,
  .nanumgothiccoding * {
    font-family: 'Nanum Gothic Coding', monospace !important;
  }
  .koreawar,
  .koreawar * {
    font-family: '62570체' !important;
    font-weight: 400 !important;
  }
  .gmarketsans,
  .gmarketsans * {
    font-family: 'GmarketSans' !important;
    font-weight: 400 !important;
  }
  .ibmplexsans,
  .ibmplexsans * {
    font-family: 'IBMPlexSansKR' !important;
  }

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
`
