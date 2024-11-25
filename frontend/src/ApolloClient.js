import { ApolloClient, InMemoryCache } from '@apollo/client';
console.log(process.env.REACT_APP_GRAPHQL_ENDPOINT);
const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
});

export default client;
