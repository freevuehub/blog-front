import { gql } from '../lib'

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
