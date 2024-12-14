import { CodegenConfig } from "@graphql-codegen/cli";

import { GRAPHQL_LINK } from "./graphql/apolloClient";

const config: CodegenConfig = {
  schema: GRAPHQL_LINK,
  documents: ["src/**/*.{ts,tsx}"],
  generates: {
    "./src/generated/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
