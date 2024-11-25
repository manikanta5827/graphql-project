import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://graphql-project-navy.vercel.app/graphql',
  cache: new InMemoryCache(),
});

export default client;
