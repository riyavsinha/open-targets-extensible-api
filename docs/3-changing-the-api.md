# Changing the GraphQL API

If you've added new data and want to now expose that to the GraphQL API, you can follow the following steps:

## Modify the GraphQL Schema

When considering the structure of your GraphQL schema, remember to design for _user experience_. Queries and data should be structured in a way that makes semantic sense, rather than being limited to the database structure.

Once your schema is finalized, you can modify the schema file [here](/backend-server/src/local-subschema/gql-schema.ts). **You do not need to (and should not) repeat fields that already exist in OpenTargets Genetics API**.

## Write Resolvers to Fulfil your GQL Schema

This can also be done in the above `gql-schema.ts` file. This allows the GraphQL API to understand _how_ to fulfil the user requested data, and is where you should use the Prisma Client to query, modify and combine data as needed.

## Regenerate GraphQL Types for Typescript

To do this, you must run the backend server. You can either do this by running `npm run start` from within the `backend-server/` directory, or `docker compose up backend-server` from the top-level directory.

Either way, from a separate terminal tab, navigate to the `backend-server/` directory, and run `npm run generate-gql-types`. This will regenerate the [backend server generated types](/backend-server/src/generated/graphql.ts) that enables the TS compiler to check whether your resolver code matches your schema types.
