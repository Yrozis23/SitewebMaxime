import { describe, it, expect, vi, beforeEach } from "vitest";
import { createLogger } from "@/lib/logger";

describe("createLogger", () => {
  beforeEach(() => vi.restoreAllMocks());

  it("creates a logger with all levels", () => {
    const log = createLogger("Test");
    expect(log).toHaveProperty("info");
    expect(log).toHaveProperty("warn");
    expect(log).toHaveProperty("error");
    expect(log).toHaveProperty("debug");
  });

  it("formats with module and level", () => {
    const spy = vi.spyOn(console, "log").mockImplementation(() => {});
    createLogger("Mod").info("msg");
    const out = spy.mock.calls[0][0] as string;
    expect(out).toContain("[INFO]");
    expect(out).toContain("[Mod]");
    expect(out).toContain("msg");
  });

  it("logs errors to console.error with data", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    createLogger("X").error("fail", { code: 500 });
    expect(spy).toHaveBeenCalledOnce();
    expect(spy.mock.calls[0][1]).toEqual({ code: 500 });
  });
});
