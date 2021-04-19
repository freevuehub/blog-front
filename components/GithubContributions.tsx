import React from 'react'
import { css, Theme, useTheme } from '@emotion/react'
import { IContribution } from '~/types'
import { breakPoint } from '~/lib'

interface IProps {
  data: IContribution[][]
  totalCount: number
}

interface IContributions {
  count: number
  date: string
}

const SvgWrapCss = (theme: Theme) => css`
  width: 100%;
  order: 1;
  margin-bottom: 30px;
  box-shadow: ${theme.shadow.material};
  border-radius: 15px;
  background-color: #fff;
  padding: 20px;
  .title-wrap {
    display: flex;
    align-items: center;
    h1 {
      line-height: 34px;
      margin-right: 10px;
      color: ${theme.text};
    }
  }
  & > div {
    overflow-x: auto;
    overflow-y: hidden;
  }
  @media (max-width: ${breakPoint.mobile}) {
    padding-right: 0;
  }
`
const SvgCss = css`
  display: block;
  width: 685px;
  height: 81px;
`
const RectCss = (fillColor: string) => css`
  rx: 2;
  ry: 2;
  fill: ${fillColor};
`

const Day = (item: IContributions, index: number) => {
  const theme = useTheme()
  const rectColor = () => {
    const { count } = item

    if (count < 1) {
      return `${theme.contributions.phase0}`
    } else if (1 <= count && count < 7) {
      return `${theme.contributions.phase1}`
    } else if (7 <= count && count < 14) {
      return `${theme.contributions.phase2}`
    } else if (14 <= count && count < 30) {
      return `${theme.contributions.phase3}`
    } else {
      return `${theme.contributions.phase4}`
    }
  }

  return (
    <rect css={RectCss(rectColor())} key={item.date} width={9} height={9} x={0} y={index * 12} />
  )
}
const Week = (item: IContributions[], index: number) => <g style={{ transform: `translate(${index * 13}px)` }} key={index}>{item.map(Day)}</g>
const GithubContributions: React.FC<IProps> = (props) => {
  const theme = useTheme()

  return (
    <div css={SvgWrapCss(theme)}>
      <div className="title-wrap">
        <h1>
          {`${props.totalCount || 0}`.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,')} Contributions
        </h1>
        <a
          className="github-button"
          href="https://github.com/freevuehub"
          data-color-scheme="no-preference: light; light: dark; dark: light;"
          data-show-count="true"
          aria-label="Follow @freevuehub on GitHub"
        >
          Follow
        </a>
      </div>
      <div>
        <svg css={SvgCss}>
          {props.data.map(Week)}
        </svg>
      </div>
    </div>
  )
}

export default GithubContributions
