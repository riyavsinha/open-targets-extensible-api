import { makeExecutableSchema } from "@graphql-tools/schema";
import { Context } from "../context.js";

export const typeDefs = `
type Query {
  variantInfo(id: ID!): Variant
}
type Variant {
  id: ID!
  newEntities: [NewEntityRelatedToVariant!]!
}
type NewEntityRelatedToVariant {
  id: ID!
  newProperty: String!
}
`;

export const resolvers = {
  Query: {
    variantInfo: (_parent: any, args: any, context: Context) => {
      return context.prisma.variant.findUnique({where: {id: args.id}});
    },
  },
};

export const schema = makeExecutableSchema<Context>({
  resolvers,
  typeDefs,
});

export const localSchema = { schema: schema };
