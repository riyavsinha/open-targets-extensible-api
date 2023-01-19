import { PrismaClient } from "@prisma/client";

let url = process.env.DATABASE_URL;
if (url && process.env.DB_SERVICE_NAME) {
  url = url.replace(/@(.*?):/, `@${process.env.DB_SERVICE_NAME}:`);
}

export const prisma = new PrismaClient({
  datasources: {
    db: {
      url,
    },
  },
});
