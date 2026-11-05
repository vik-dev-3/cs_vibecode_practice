import { connection } from "next/server";

// Railway дёргает этот путь перед переключением трафика на новый деплой.
export async function GET() {
  // Иначе Next пререндерит ответ при сборке и отдаёт его из кэша — живость процесса не проверяется.
  await connection();
  return Response.json({ status: "ok" });
}
