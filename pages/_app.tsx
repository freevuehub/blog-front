import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import { NextRouter, useRouter } from 'next/router'
import { ApolloProvider } from '@apollo/client'
import { Global, ThemeProvider } from '@emotion/react'
import { client, colorSet } from '../lib'
import { FontStyle, ResetStyle, MarkdownStyle } from '../styles'
import { Layout, SnackBar } from '../components'
import * as gtag from '../lib/gtag'

const mode: 'dark' | 'light' = 'dark'
const theme = colorSet[mode]
const onEffect = (router: NextRouter) => () => {
  const onRouteChange = (url: URL) => {
    gtag.pageview(url)
  }
  const effectCallBack = () => {
    router.events.off('routeChangeComplete', onRouteChange)
  }

  router.events.on('rwouteChangeComplete', onRouteChange)

  return effectCallBack
}
const App: React.FC<AppProps> = (props) => {
  const router = useRouter()

  useEffect(onEffect(router), [router.events])

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Global styles={FontStyle} />
        <Global styles={ResetStyle} />
        <Global styles={(theme: any) => MarkdownStyle(theme)} />
        <Layout>
          <props.Component {...props.pageProps} />
        </Layout>
        <SnackBar />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
