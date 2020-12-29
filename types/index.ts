export interface ITheme {
  theme?: {
    primary: string
    background: {
      app: string
      content: string
    }
    text: string
  }
}

export interface ICategory {
  name: string
  id: string
}
