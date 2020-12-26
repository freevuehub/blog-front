import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { client, GlobalStyle } from '../lib'
import { Layout } from '../components'
import { Global, ThemeProvider } from '@emotion/react'

interface IProps {
  Component: any
  pageProps: any
}

const mode = 'light'
const colorSet = {
  light: {
    primary: '#6bb3b8',
    background: {
      app: '#fff',
      content: '#fff',
    },
    text: '#37352f',
  },
  dark: {
    primary: '#6bb3b8',
    background: {
      app: '#121212',
      content: '#1e1e1e',
    },
    text: '#fff',
  },
}
const theme = colorSet[mode]
const App: React.FC<IProps> = (props) => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
        <Layout>
          <props.Component {...props.pageProps} />
        </Layout>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
