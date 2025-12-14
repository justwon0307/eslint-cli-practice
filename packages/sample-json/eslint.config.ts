import { defineConfig } from "eslint/config";
import { baseConfig } from "@internal/eslint";
import { jsonConfig } from "@internal/eslint/json";

export default defineConfig([
  ...baseConfig,
  ...jsonConfig,
]);
