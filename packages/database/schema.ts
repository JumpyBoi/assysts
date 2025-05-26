import { pgTable, serial, text } from "drizzle-orm/pg-core";
// import { sql } from "drizzle-orm"; // sql import is not used for this model

export const page = pgTable('pages', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
});


