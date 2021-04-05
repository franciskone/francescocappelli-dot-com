import { ApolloClient, InMemoryCache } from '@apollo/client';
import { graphQlApiUrl } from 'util/constants';

const client = new ApolloClient({
  uri: graphQlApiUrl,
  cache: new InMemoryCache(),
});

export default client;
