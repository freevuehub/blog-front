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

export const category = (name: string) => ({
  query: gql`
    {
      category(id: "${name}", type: "name") {
        id
        name
        type
      }
    }
  `
})
