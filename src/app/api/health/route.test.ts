import { beforeEach, expect, test, vi } from "vitest";
import { GET } from "./route";

// connection() работает только внутри запроса Next; в unit-тесте запроса нет.
vi.mock("next/server", () => ({ connection: async () => {} }));

// Настоящая база в unit-тесте не нужна: проверяем реакцию маршрута на её ответ.
const execute = vi.fn();
vi.mock("@/db", () => ({ db: { execute: (...args: unknown[]) => execute(...args) } }));

beforeEach(() => {
  execute.mockReset();
  vi.spyOn(console, "error").mockImplementation(() => {});
});

test("health отвечает 200 и status ok, когда база доступна", async () => {
  execute.mockResolvedValue({ rows: [] });
  const res = await GET();
  expect(res.status).toBe(200);
  expect(await res.json()).toEqual({ status: "ok" });
});

test("health отвечает 503 без деталей ошибки, когда база недоступна", async () => {
  execute.mockRejectedValue(new Error("connect ECONNREFUSED postgres://u:secret@h/db"));
  const res = await GET();
  expect(res.status).toBe(503);
  const body = await res.text();
  expect(JSON.parse(body)).toEqual({ status: "error" });
  expect(body).not.toContain("secret");
});
