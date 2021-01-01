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

const mode: 'dark' | 'light' = 'dark'
const colorSet: {
  light: IThemeSet
  dark: IThemeSet
} = {
  light: {
    white: '#ffffff',
    primary: '#6bb3b8',
    background: {
      app: '#ffffff',
      content: '#ffffff',
    },
    text: '#37352f',
    shadow: {
      new: '5px 5px 10px #d9d9d9, -5px -5px 10px #ffffff',
      material: `
        0 2px 4px -1px rgba(0, 0 ,0, 0.2),
        0 4px 5px 0 rgba(0, 0, 0, 0.14),
        0 1px 10px 0 rgba(0, 0, 0, 0.12);
      `,
      flat: 'unset',
      background: '25px 25px 50px #bcbcbc, -25px -25px 50px #fefefe',
    },
    border: {
      color: '#e6e6e6',
    },
  },
  dark: {
    white: '#ffffff',
    primary: '#6bb3b8',
    background: {
      app: '#121212',
      content: '#1e1e1e',
    },
    text: '#ffffff',
    shadow: {
      new: '5px 5px 10px #0f0f0f, -5px -5px 10px #151515',
      material: `
        0 2px 4px -1px rgba(0, 0 ,0, 0.2),
        0 4px 5px 0 rgba(0, 0, 0, 0.14),
        0 1px 10px 0 rgba(0, 0, 0, 0.12);
      `,
      flat: 'unset',
      background: '25px 25px 50px #0f0f0f, -25px -25px 50px #151515;',
    },
    border: {
      color: '#1c1c1c',
    },
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
