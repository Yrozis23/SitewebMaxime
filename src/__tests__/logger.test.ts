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

  it("formats messages with module name and level", () => {
    const spy = vi.spyOn(console, "log").mockImplementation(() => {});
    createLogger("MyModule").info("hello");
    const msg = spy.mock.calls[0][0] as string;
    expect(msg).toContain("[INFO]");
    expect(msg).toContain("[MyModule]");
    expect(msg).toContain("hello");
  });

  it("logs errors to console.error", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    createLogger("X").error("fail", { code: 500 });
    expect(spy).toHaveBeenCalledOnce();
    expect(spy.mock.calls[0][1]).toEqual({ code: 500 });
  });

  it("includes ISO timestamp", () => {
    const spy = vi.spyOn(console, "log").mockImplementation(() => {});
    createLogger("T").info("ts");
    expect(spy.mock.calls[0][0] as string).toMatch(/\[\d{4}-\d{2}-\d{2}T/);
  });
});
