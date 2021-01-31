import React from 'react'
import styled from '@emotion/styled'
import { ITheme, IContribution } from '../types'

interface IProps {
  data: IContribution[][]
  totalCount: number
}

interface IContributions {
  count: number
  date: string
}

const SvgWrapStyled = styled.div`
  width: 100%;
  order: 1;
  margin-bottom: 30px;
  padding-right: 350px;
  .title-wrap {
    display: flex;
    align-items: center;
    h1 {
      line-height: 34px;
      margin-right: 10px;
      ${(props: ITheme) => ({
        color: props.theme?.text
      })}
    }
  }
  & > div {
    overflow-x: auto;
    overflow-y: hidden;
  }
`
const SvgStyled = styled.svg`
  display: block;
  width: 685px;
  height: 81px;
`
const RectStyled = styled.rect`
  rx: 2;
  ry: 2;
  ${(props: ITheme & IContributions) => {
    const color = () => {
      const { count } = props
      
      if (count < 1) {
        return `${props.theme?.contributions.phase0}`
      } else if (1 <= count && count < 7) {
        return `${props.theme?.contributions.phase1}`
      } else if (7 <= count && count < 14) {
        return `${props.theme?.contributions.phase2}`
      } else if (14 <= count && count < 30) {
        return `${props.theme?.contributions.phase3}`
      } else {
        return `${props.theme?.contributions.phase4}`
      }
    }

    return {
      fill: color(),
    }
}}
`

const Day = (item: IContributions, index: number) => <RectStyled date={item.date} count={item.count} key={item.date} width={9} height={9} x={0} y={index * 12} />
const Week = (item: IContributions[], index: number) => <g style={{ transform: `translate(${index * 13}px)` }} key={index}>{item.map(Day)}</g>

const GithubContributions: React.FC<IProps> = (props) => {
  return (
    <SvgWrapStyled>
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
        <SvgStyled>{props.data.map(Week)}</SvgStyled>
      </div>
    </SvgWrapStyled>
  )
}

export default GithubContributions
