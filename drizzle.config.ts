import { defineConfig } from "drizzle-kit";

// Нужен только для `drizzle-kit generate`: он сравнивает схему с прошлыми миграциями, база ему не нужна.
export default defineConfig({
  dialect: "postgresql",
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  casing: "snake_case",
});
