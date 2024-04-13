// Generated by Xata Codegen 0.29.3. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "transactions",
    columns: [
      { name: "description", type: "text", defaultValue: "NA" },
      { name: "category", type: "string" },
      { name: "subcategory", type: "string" },
      { name: "modeofpayment", type: "string" },
      { name: "amount", type: "float" },
      { name: "email", type: "string" },
      { name: "date", type: "datetime" },
    ],
  },
  {
    name: "users",
    columns: [
      { name: "email", type: "string" },
      { name: "name", type: "string" },
      { name: "image", type: "string" },
      { name: "token", type: "string" },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Transactions = InferredTypes["transactions"];
export type TransactionsRecord = Transactions & XataRecord;

export type Users = InferredTypes["users"];
export type UsersRecord = Users & XataRecord;

export type DatabaseSchema = {
  transactions: TransactionsRecord;
  users: UsersRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL: "https://TrackerX-i8lbph.ap-southeast-2.xata.sh/db/trackerx",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};
