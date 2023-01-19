# Loading Data into the Database

Because the loading of data depends on the shape of the data, there is no built in way to do this. However, as an outline:

## Determine Schema

Determine a schema you'd like to store your data in, that aligns with your data structure and semantics.

Follow the steps outlined in "[Modifying Database Schema](./1-modifying-db-schema.md)" for a guide on how to execute these changes.

## Write a Batch Loading Script

You will need to write a script to convert your data to a format matching your schema, and populate rows in your tables. In general, this script should be committed so that:
1. The method of conversion for the data can be looked back upon to ensure it was done correctly
2. If any new data in the same shape needs to be loaded (e.g. additional experiments done according to the same pipeline), it can be quickly loaded in.

There are a couple methods to do this:

### Using Prisma Client

The `backend-server/` is already equipped to interact with the database through Prisma. You can create a directory within there for data loading scripts, and write a Typescript file that uses Prisma to go through your data.

Create a directory either within `backend-server/` for data loading scripts. You can also do it in a separate top-level directory, but you will need to reinstall the prisma client

### Using any other DB Connector

The Postgres server is independent of the backend server, and so you can use any language that has a library to connect to Postgres to write your scripts (or just a plain SQL script). If you follow this method, you can create your directory for data loading scripts at the top-level outside the `backend-server/`.
