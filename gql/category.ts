import { gql } from '../lib'

export const categories = () => ({
  query: gql`
    {
      categories {
        id
        name
      }
    }
  `
})
