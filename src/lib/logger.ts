type LogLevel = "info" | "warn" | "error" | "debug";
const isDev = process.env.NODE_ENV === "development";

function log(level: LogLevel, module: string, message: string, data?: unknown) {
  const ts = new Date().toISOString();
  const formatted = `[${ts}] [${level.toUpperCase()}] [${module}] ${message}`;
  switch (level) {
    case "error": console.error(formatted, data ?? ""); break;
    case "warn": console.warn(formatted, data ?? ""); break;
    case "debug": if (isDev) console.debug(formatted, data ?? ""); break;
    default: console.log(formatted, data ?? "");
  }
}

export function createLogger(module: string) {
  return {
    info: (msg: string, data?: unknown) => log("info", module, msg, data),
    warn: (msg: string, data?: unknown) => log("warn", module, msg, data),
    error: (msg: string, data?: unknown) => log("error", module, msg, data),
    debug: (msg: string, data?: unknown) => log("debug", module, msg, data),
  };
}
