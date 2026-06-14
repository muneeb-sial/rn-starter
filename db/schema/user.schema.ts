import {
  sqliteTable,
  integer,
  text,
} from "drizzle-orm/sqlite-core";

export const UserSchema = sqliteTable("users", {
  id: integer("id").primaryKey({
    autoIncrement: true,
  }),
  name: text("name").notNull(),
  email: text("email").notNull(),
});