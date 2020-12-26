import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { client } from '../lib'
import { Layout } from '../components'

interface IProps {
  Component: any
  pageProps: any
}

const App: React.FC<IProps> = (props) => {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <props.Component {...props.pageProps} />
      </Layout>
    </ApolloProvider>
  )
}

export default App
