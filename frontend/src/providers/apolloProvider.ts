"use client";

import { ApolloNextAppProvider } from "@apollo/experimental-nextjs-app-support";
import { makeClient } from "../../graphql/apolloClient";

export const ApolloWrapper = ({ children }: React.PropsWithChildren) => {
  return ApolloNextAppProvider({ makeClient, children });
};
