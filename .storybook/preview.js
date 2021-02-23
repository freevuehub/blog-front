import React from 'react'
import { Global, ThemeProvider, useTheme } from '@emotion/react'
import { addDecorator } from '@storybook/react'
import { FontStyle, ResetStyle, MarkdownStyle } from '~/styles'

addDecorator((story) => {
  const theme = useTheme()

  return (
    <ThemeProvider theme={theme}>
      <Global styles={FontStyle} />
      <Global styles={ResetStyle} />
      <Global styles={MarkdownStyle(theme)} />
      {story()}
    </ThemeProvider>
  )
})

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
