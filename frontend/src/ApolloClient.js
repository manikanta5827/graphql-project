import { ApolloClient, InMemoryCache } from '@apollo/client';
console.log(process.env.REACT_APP_GRAPHQL_ENDPOINT);
const client = new ApolloClient({
  uri: 'https://graphql-project-navy.vercel.app/graphql',
  cache: new InMemoryCache(),
});

export default client;
