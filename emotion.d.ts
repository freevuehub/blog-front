import '@emotion/react'
import { IThemeSet } from '~/types'

declare module '@emotion/react' {
  export interface Theme extends IThemeSet {}
}
