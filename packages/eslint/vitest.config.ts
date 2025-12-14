import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    root: __dirname,
    globals: true,
    include: ["tests/**/*.test.ts"],
    coverage: {
      include: ["src/cli/**/*.ts"],
      exclude: ["src/cli/index.ts"],
      provider: "v8",
      reporter: [["text", { skipFull: true }], "clover", "lcov"],
      thresholds: {
        lines: 100,
        functions: 100,
        branches: 100,
        statements: 100,
      },
    },
  },
});
