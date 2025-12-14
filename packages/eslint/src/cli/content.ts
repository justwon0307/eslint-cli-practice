export const baseContent = `import { defineConfig } from "eslint/config";
import { baseConfig } from "@internal/eslint";

export default defineConfig([
  ...baseConfig,
  {
    // Add your custom rules here
  },
]);
`;

export const reactContent = `import { defineConfig } from "eslint/config";
import { baseConfig } from "@internal/eslint";
import { reactConfig } from "@internal/eslint/react";

export default defineConfig([
  ...baseConfig,
  ...reactConfig,
  {
    // Add your custom rules here
  },
]);
`;

export const allContent = `import { defineConfig } from "eslint/config";
import { allConfig } from "@internal/eslint";

export default defineConfig([
  ...allConfig,
  {
    // Add your custom rules here
  },
]);
`;
