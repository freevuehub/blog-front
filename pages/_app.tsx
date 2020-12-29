import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { Global, ThemeProvider } from '@emotion/react'
import { client } from '../lib'
import { IThemeSet } from '../types'
import { FontStyle, ResetStyle, MarkdownStyle } from '../styles'
import { Layout } from '../components'

interface IProps {
  Component: any
  pageProps: any
}

const mode = 'light'
const colorSet: {
  light: IThemeSet
  dark: IThemeSet
} = {
  light: {
    white: '#fff',
    primary: '#6bb3b8',
    background: {
      app: '#fff',
      content: '#fff',
    },
    text: '#37352f',
    shadow: {
      new: '5px 5px 10px #d9d9d9, -5px -5px 10px #ffffff',
      material: '5px 5px 10px #d9d9d9, -5px -5px 10px #ffffff',
      flat: 'unset',
    },
  },
  dark: {
    white: '#fff',
    primary: '#6bb3b8',
    background: {
      app: '#121212',
      content: '#1e1e1e',
    },
    text: '#fff',
    shadow: {
      new: '5px 5px 10px #0f0f0f, -5px -5px 10px #151515',
      material: '5px 5px 10px #0f0f0f, -5px -5px 10px #151515',
      flat: 'unset',
    }
  },
}
const theme = colorSet[mode]
const App: React.FC<IProps> = (props) => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Global styles={FontStyle} />
        <Global styles={ResetStyle} />
        <Global styles={(theme) => MarkdownStyle(theme)} />
        <Layout>
          <props.Component {...props.pageProps} />
        </Layout>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
