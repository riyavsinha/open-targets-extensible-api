import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { stitchSchemas } from "@graphql-tools/stitch";
import { localSchema } from "./local-subschema/gql-schema.js";
import openTargetSchema from "./ot-remote-subschema/ot-subschema.js";
import { Context, context } from "./context.js";

const gatewaySchema = stitchSchemas({
  subschemas: [await openTargetSchema(), localSchema],
});

const server = new ApolloServer<Context>({
  schema: gatewaySchema,
});

const { url } = await startStandaloneServer<Context>(server, {
  context: async () => context,
});
console.log(`🚀 Server ready at ${url}`);
