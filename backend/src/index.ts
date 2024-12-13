import { ApolloServer, BaseContext } from "@apollo/server";
import resolvers from "./graphql/resolvers";
import { startStandaloneServer } from "@apollo/server/standalone";
import { readFileSync } from "fs";

const typeDefs = readFileSync("./src/graphql/schema.graphql", "utf-8");

const server = new ApolloServer<BaseContext>({
  typeDefs,
  resolvers,
});

const startServer = async () => {
  const { url } = await startStandaloneServer(server, {
    context: async ({ req }) => ({ token: req.headers.token }),
    listen: { port: 4000 },
  });
  console.log(`Server is running on ${url}`);
};

startServer();
