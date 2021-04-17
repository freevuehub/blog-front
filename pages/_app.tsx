import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import { NextRouter, useRouter } from 'next/router'
import { ApolloProvider } from '@apollo/client'
import { Global, ThemeProvider, Theme } from '@emotion/react'
import { client, colorSet } from '~/lib'
import { FontStyle, ResetStyle, MarkdownStyle, Common } from '~/styles'
import { Layout, Snackbar } from '~/components'
import * as gtag from '~/lib/gtag'

const mode: 'dark' | 'light' = 'light'
const themeSet: Theme = colorSet[mode]
const onEffect = (router: NextRouter) => () => {
  const onRouteChange = (url: URL) => {
    gtag.pageview(url)
  }
  const effectCallBack = () => {
    router.events.off('routeChangeComplete', onRouteChange)
  }

  router.events.on('routeChangeComplete', onRouteChange)

  return effectCallBack
}
const App: React.FC<AppProps> = (props) => {
  const router = useRouter()

  useEffect(onEffect(router), [router.events])

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={themeSet}>
        <Global styles={[FontStyle, ResetStyle, Common]} />
        <Global styles={(theme: Theme) => MarkdownStyle(theme)} />
        <Layout>
          <props.Component {...props.pageProps} />
        </Layout>
        {process.env.NODE_ENV === 'development' && <Snackbar />}
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
