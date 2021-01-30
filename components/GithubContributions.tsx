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
  h1 {
    line-height: 34px;
    display: flex;
    align-items: center;
    ${(props: ITheme) => ({
      color: props.theme?.text
    })}
    iframe {
      margin-left: 10px;
    }
  }
  & > div {
    overflow-x: auto;
    overflow-y: hidden;
  }
`
const SvgStyled = styled.svg`
  display: block;
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

const Day = (item: IContributions, index: number) => <RectStyled date={item.date} count={item.count} key={item.date} width={10} height={10} x={0} y={index * 13} />
const Week = (item: IContributions[], index: number) => <g style={{ transform: `translate(${index * 14}px)` }} key={index}>{item.map(Day)}</g>

const GithubContributions: React.FC<IProps> = (props) => {
  return (
    <SvgWrapStyled>
      <h1>
        {`${props.totalCount || 0}`.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,')} Contributions
        <iframe
          src="https://ghbtns.com/github-btn.html?user=freevuehub&amp;repo=freevuehub.github.io&amp;type=star&amp;count=true&amp;size=small"
          frameBorder="0" scrolling="0" width="80px" height="30px" />
      </h1>
      <div>
        <SvgStyled width={738} height={90}>{props.data.map(Week)}</SvgStyled>
      </div>
    </SvgWrapStyled>
  )
}

export default GithubContributions
