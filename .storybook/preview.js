import React from 'react'
import { Global, ThemeProvider } from '@emotion/react'
import { addDecorator } from '@storybook/react'
import { FontStyle, ResetStyle, MarkdownStyle } from '~/styles'
import { colorSet } from '~/lib'

addDecorator((story) => {
  return (
    <ThemeProvider theme={colorSet['dark']}>
      <Global styles={FontStyle} />
      <Global styles={ResetStyle} />
      <Global styles={(theme) => MarkdownStyle(theme)} />
      {story()}
    </ThemeProvider>
  )
})

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
