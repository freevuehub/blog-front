import { css } from '@emotion/react'

const Code = (props: any) => css`
  .article-markdown {
    & > code {
      font-family: 'Nanum Gothic Coding', monospace;
      font-size: 85%;
      tab-size: 2;
      padding: 34px 16px 32px 32px;
      min-height: 1em;
      color: rgb(55, 53, 47);
      white-space: pre;
      line-height: 1.5;
      display: block;
      .token.atrule,
      .token.attr-value,
      .token.keyword {
        color: #07a;
      }
      .token.function,
      .token.class-name {
        color: #DD4A68;
      }
      .token.punctuation {
        color: #999;
      }
      .token.operator,
      .token.entity,
      .token.url,
      .language-css .token.string,
      .style .token.string {
        color: #9a6e3a;
        background: hsla(0, 0%, 100%, .5);
      }
      .token.property,
      .token.tag,
      .token.boolean,
      .token.number,
      .token.constant,
      .token.symbol,
      .token.deleted {
        color: #905;
      }
      .token.comment,
      .token.prolog,
      .token.doctype,
      .token.cdata {
        color: slategray;
      }
    }
  }
`

export default Code