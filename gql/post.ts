import { gql } from '../lib'

export const post = ($id: string) => ({
  query: gql`
    {
      post(id: "${$id}") {
        title
        markdown
      }
    }
  `
})

export const posts = () => ({
  query: gql`
    {
      list: posts {
        id
        category
        image
        title
        description
        createDate
      }
    }
  `
})
