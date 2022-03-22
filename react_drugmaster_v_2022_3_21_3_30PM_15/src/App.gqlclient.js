/**
 * @author AUTHOR_NAME
 * @email AUTHOR_EMAIL
 * @create date
 * @modify date
 * @desc GraphQL client setup done here using the Apollo Client.
 */

import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloGQLClient from "./graphql";

const AppGQLClient = (props) => {
  return (
    <ApolloProvider client={ApolloGQLClient}>{props.children}</ApolloProvider>
  );
};

export default AppGQLClient;
