# Guide: Modifying Database Schema

## Modify Prisma Schema

To modify the underlying schema to be able to load new data, you will need to update the [Prisma Schema](/backend-server/src/local-subschema/prisma/schema.prisma). You can find information on how to write Prisma schemas [here](https://www.prisma.io/docs/concepts/components/prisma-schema).

## Ensure Database Server is Running

Make sure your database server is running. You can do this by running `docker ps` to see if the container is up. If not, you can run `docker compose up -d db` from the main directory to run it in the background.

## Regenerate Prisma Types

To update the Typescript types for the Prisma Client, from within the `backend-server/` directory, run

```
npm run generate-prisma
```

## Push Schema Changes to the DB Server

In general, there are two types of pushes you can do, both executed from within `backend-server/`:
1. `npx prisma db push` which will modify the database, but not persist changes in code. This is useful for prototyping
1. `npx prisma migrate dev` which will modify the database, and generate a migration file that can be committed to code, enabling the schema changes to be tracked and state to be rebuilt.

See [Prisma Migrate](https://www.prisma.io/docs/concepts/components/prisma-migrate) for detailed information on different types of pushes.
