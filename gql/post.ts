import { gql } from '../lib'

export const post = ($id: string) => ({
  query: gql`
    {
      post(id: "${$id}") {
        list {
          image
          title
          markdown
          clickCount
          source
          createDate
          updateDate
        }
      }
    }
  `
})

export const posts = ({ type, value }: { type?: string, value?: string }) => ({
  query: gql`
    {
      post(
        type: "${type}",
        value: "${value}"
      ) {
        list {
          id
          category
          image
          title
          description
          createDate
        }
        total: totalCount
      }
    }
  `
})
