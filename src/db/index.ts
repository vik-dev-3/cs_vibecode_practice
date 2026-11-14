import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { z } from "zod";
import * as schema from "./schema";

// Падаем при старте, если адреса нет или он кривой. Zod не включает значение в ошибку, пароль не утечёт в лог.
const databaseUrl = z
  .url({ protocol: /^postgres(ql)?$/ })
  .parse(process.env.DATABASE_URL);

export const db = drizzle({
  client: new Pool({ connectionString: databaseUrl }),
  schema,
  casing: "snake_case",
});
