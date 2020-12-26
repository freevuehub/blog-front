
import { gql, ApolloClient, InMemoryCache } from '@apollo/client';

export {
  gql
}

export const client = new ApolloClient({
  uri: `${process.env.API_PROTOCOL}${process.env.API_URL}`,
  cache: new InMemoryCache()
});
