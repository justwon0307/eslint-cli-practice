import { defineConfig } from "eslint/config";
import { baseConfig } from "@internal/eslint";
import { reactConfig } from "@internal/eslint/react";

export default defineConfig([
  ...baseConfig,
  ...reactConfig,
  {
    // Add your custom rules here
  },
]);
