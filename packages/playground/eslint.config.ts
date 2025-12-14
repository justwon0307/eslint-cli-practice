import { defineConfig } from "eslint/config";
import { allConfig } from "@internal/eslint";

export default defineConfig([
  ...allConfig,
  {
    // Add your custom rules here
  },
]);
