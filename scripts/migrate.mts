// Применяет SQL-миграции из drizzle/. Запускается локально и на Railway перед деплоем (preDeployCommand).
// Использует мигратор из drizzle-orm, а не drizzle-kit: dev-зависимости на проде не нужны.
import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { Pool } from "pg";

const url = process.env.DATABASE_URL;
if (!url) throw new Error("DATABASE_URL is not set");

const pool = new Pool({ connectionString: url });
try {
  // Каждая миграция идёт в транзакции; применённые записываются в drizzle.__drizzle_migrations и повторно не запускаются.
  await migrate(drizzle({ client: pool }), { migrationsFolder: "drizzle" });
  console.log("migrations applied");
} finally {
  await pool.end();
}
