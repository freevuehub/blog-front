import { gql } from '../lib'

export const post = ($id: string) => ({
  query: gql`
    {
      post(id: "${$id}") {
        image
        title
        markdown
        clickCount
        source
        createDate
        updateDate
      }
    }
  `
})

export const posts = ({ type, value }: { type?: string, value?: string }) => ({
  query: gql`
    {
      list: post(
        type: "${type}",
        value: "${value}"
      ) {
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
