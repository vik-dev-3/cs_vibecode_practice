import { expect, test, vi } from "vitest";
import { GET } from "./route";

// connection() работает только внутри запроса Next; в unit-тесте запроса нет.
vi.mock("next/server", () => ({ connection: async () => {} }));

test("health отвечает 200 и status ok", async () => {
  const res = await GET();
  expect(res.status).toBe(200);
  expect(await res.json()).toEqual({ status: "ok" });
});
