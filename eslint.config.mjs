import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig(
  {
    ignores: ["**/dist/**", "**/node_modules/**"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    extends: [
      eslint.configs.recommended,
      tseslint.configs.recommended,
      eslintConfigPrettier,
    ],
  },
);
