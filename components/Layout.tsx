import React from 'react'
import { HeaderBar } from '../components'

const Layout: React.FC = (props) => {
  return (
    <>
      <HeaderBar />
      {props.children}
    </>
  )
}

export default Layout
