import React from 'react'

interface IContribution {
  count: number
  date: string
}

interface IProps {
  data: IContribution[][]
}

const Day = (item: { count: number, date: string }) => <rect key={item.date} width={10} height={10} />
const Week = (item: { count: number, date: string }[], index: number) => <g key={index}>{item.map(Day)}</g>

const GithubContributions: React.FC<IProps> = (props) => {
  return <svg>{props.data.map(Week)}</svg>
}

export default GithubContributions
