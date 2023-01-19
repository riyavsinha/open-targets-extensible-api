import { PrismaClient } from "@prisma/client";
import { prisma } from "./local-subschema/prisma-client.js";

export interface Context {
  prisma: PrismaClient;
}

export const context: Context = {
  prisma: prisma,
};
