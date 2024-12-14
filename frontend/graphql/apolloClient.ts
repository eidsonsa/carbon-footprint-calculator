import { ApolloLink, HttpLink } from "@apollo/client";
import {
  ApolloClient,
  InMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support";

export const GRAPHQL_LINK = "http://localhost:4000/graphql";

export const makeClient = () => {
  const httpLink = new HttpLink({
    uri: GRAPHQL_LINK,
  });

  return new ApolloClient({
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
        : httpLink,
    cache: new InMemoryCache(),
  });
};
