import { ApolloServer } from "@apollo/server";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";
import { startStandaloneServer } from "@apollo/server/standalone";

const server = new ApolloServer({
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
