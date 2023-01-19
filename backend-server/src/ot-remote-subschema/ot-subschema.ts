import { AsyncExecutor } from "@graphql-tools/utils";
import { wrapSchema, schemaFromExecutor } from "@graphql-tools/wrap";
import { request } from "graphql-request";

// Source: https://genetics-docs.opentargets.org/data-access/graphql-api
const API_URL = "https://api.genetics.opentargets.org/graphql";

const executor: AsyncExecutor = async ({ document, variables }) => {
  const response = await request(API_URL, document, variables);
  return { data: response };
};

export default async function openTargetSchema() {
  const schema = wrapSchema({
    schema: await schemaFromExecutor(executor),
    executor,
  });
  return schema;
}
