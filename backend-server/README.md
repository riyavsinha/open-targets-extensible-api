# Database Server

The backend server runs a [Apollo GraphQL Server](https://www.apollographql.com/docs/apollo-server) instance that then the frontend can query through [GraphQL](https://graphql.org/) requests.

In order to extend the [OpenTargets Genetics API](https://genetics-docs.opentargets.org/data-access/graphql-api), this server uses the [Schema Stitching](https://the-guild.dev/graphql/tools/docs/schema-stitching/stitch-combining-schemas) pattern established by GraphQL Tools. Specifically, the existing OpenTargets Schema is treated as a [Remote Schema](https://the-guild.dev/graphql/tools/docs/remote-schemas), which is then extended by our local schema.

To provide data to the API for our local schema, this server uses [Prisma](https://www.prisma.io/) as the Object-Relation Manager (ORM).
