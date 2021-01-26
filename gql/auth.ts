import { gql } from '../lib'

export const auth = (token: string, type: 'kakao' | 'google' | 'facebook' | 'github') => ({
  query: gql`
    {
      auth(token: "${token}", type: "${type}") {
        profile {
          nickname
          thumbnail_image_url
          profile_image_url
        }
      }
    }
  `
})
