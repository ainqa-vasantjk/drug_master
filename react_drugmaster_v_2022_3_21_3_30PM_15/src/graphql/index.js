/**
 * @author AUTHOR_NAME
 * @email AUTHOR_EMAIL
 * @create date
 * @modify date
 * @desc GraphQL client setup
 */
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";
import {
  HttpLink,
  InMemoryCache,
  ApolloClient,
  split,
  ApolloLink,
} from "apollo-boost";
import { localStorageKeys } from "../utils";
import config from "../config";

const httpLink = new HttpLink({ uri: config.graphql });

const middlewareLink = new ApolloLink((operation, forward) => {
  // get the authentication token from local storage if it exists
  const tokenValue = localStorage.getItem(localStorageKeys.auth_token);
  // return the headers to the context so httpLink can read them
  operation.setContext({
    headers: {
      Authorization: tokenValue ? `Bearer ${tokenValue}` : "",
    },
  });
  return forward(operation);
});

// authenticated httplink
const httpLinkAuth = middlewareLink.concat(httpLink);

const wsLink = new WebSocketLink({
  uri: config.socket,
  options: {
    reconnect: true,
    connectionParams: {
      Authorization: `Bearer ${localStorage.getItem(
        localStorageKeys.auth_token
      )}`,
    },
  },
});

const link = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === "OperationDefinition" && operation === "subscription";
  },
  wsLink,
  httpLinkAuth
);

// apollo client setup
const ApolloGQLClient = new ApolloClient({
  link: ApolloLink.from([link]),
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

export default ApolloGQLClient;
