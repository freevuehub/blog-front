import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { ApolloProvider } from '@apollo/client'
import { Global, ThemeProvider } from '@emotion/react'
import { client, colorSet } from '../lib'
import { FontStyle, ResetStyle, MarkdownStyle } from '../styles'
import { Layout } from '../components'
import * as gtag from '../lib/gtag'

const mode: 'dark' | 'light' = 'dark'
const theme = colorSet[mode]
const App: React.FC<AppProps> = (props) => {
  const router = useRouter()

  useEffect(() => {
    const onRouteChange = (url: URL) => {
      gtag.pageview(url)
    }

    router.events.on('routeChangeComplete', onRouteChange)

    return () => {
      router.events.off('routeChangeComplete', onRouteChange)
    }
  }, [router.events])

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Global styles={FontStyle} />
        <Global styles={ResetStyle} />
        <Global styles={(theme: any) => MarkdownStyle(theme)} />
        <Layout>
          <props.Component {...props.pageProps} />
        </Layout>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
