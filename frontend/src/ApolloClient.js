import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://graphql-project-hjw6.onrender.com/graphql',
  cache: new InMemoryCache(),
});

export default client;
