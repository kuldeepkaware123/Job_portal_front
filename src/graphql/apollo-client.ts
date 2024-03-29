// src/graphql/apollo-client.ts
// import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql', // Your GraphQL endpoint
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
