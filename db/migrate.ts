import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import { db } from "./index";
import migrations from "./drizzle/migrations";

export function useDatabaseMigration() {
  return useMigrations(db, migrations);
}