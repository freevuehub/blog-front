export interface IThemeSet {
  white: string
  primary: string
  background: {
    app: string
    content: string
  }
  text: string
  shadow: {
    new: string
    material: string
    flat: string
    background: string
  }
  border: {
    color: string
  }
  table: {
    th: string
    td: string
    background: string
    border: string
  }
}

export interface ITheme {
  theme?: IThemeSet
}

export interface ICategory {
  name: string
  id: string
}

export interface IPostListItem {
  id: string
  category: string
  image: string
  title: string
  description: string
  createDate: string
}

export interface IPostDetail {
  image: string
  title: string
  markdown: string
  description: string
  clickCount: number
  source: string
  createDate: string
  updateDate: string
}
