import { ApolloClient, InMemoryCache } from "@apollo/client"; 

const client = new ApolloClient({
  //uri: //link//
  cache: new InMemoryCache(),
});

export default client;
