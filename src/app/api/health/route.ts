import { sql } from "drizzle-orm";
import { connection } from "next/server";
import { db } from "@/db";

// Railway дёргает этот путь перед переключением трафика на новый деплой.
export async function GET() {
  // Иначе Next пререндерит ответ при сборке и отдаёт его из кэша — живость процесса не проверяется.
  await connection();
  try {
    // Без базы приложение бесполезно: пусть Railway не переключает трафик на такой деплой.
    await db.execute(sql`select 1`);
  } catch (err) {
    console.error("health: database unavailable", err);
    // Наружу — без деталей ошибки: в них может быть адрес базы.
    return Response.json({ status: "error" }, { status: 503 });
  }
  return Response.json({ status: "ok" });
}
