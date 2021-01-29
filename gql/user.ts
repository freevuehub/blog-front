import { gql } from '../lib'

export const githubContributions = ({ name }: { name: string }) => ({
  query: gql`
    {
      githubContributions(name: "${name}") {
        contributions {
          count
          date
        }
      }
    }
  `
})
