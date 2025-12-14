import { defineConfig } from "eslint/config";
import json from "@eslint/json";

export const jsonConfig = defineConfig([
  {
    files: ["**/*.json"],
    ignores: ["**/tsconfig.json", "**/tsconfig.*.json"],
    plugins: {
      json,
    },
    language: "json/json",
    extends: ["json/recommended"],
  },
  {
    files: ["**/*.jsonc", "**/tsconfig.json", "**/tsconfig.*.json"],
    plugins: {
      json,
    },
    language: "json/jsonc",
    extends: ["json/recommended"],
  },
  {
    files: ["**/*.json5"],
    plugins: {
      json,
    },
    language: "json/json5",
    extends: ["json/recommended"],
  },
]);
