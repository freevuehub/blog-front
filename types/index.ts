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
  }
  border: {
    color: string
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
