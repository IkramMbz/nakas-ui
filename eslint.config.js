import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import importPlugin from "eslint-plugin-import";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
    {
        ignores: ["dist", "node_modules"]
    },

    js.configs.recommended,

    ...tseslint.configs.recommended,

    {
        files: ["**/*.{ts,tsx}"],

        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.browser,
                ...globals.node
            }
        },

        plugins: {
            "@typescript-eslint": tseslint.plugin,
            import: importPlugin,
            prettier: prettierPlugin
        },

        rules: {
            "prettier/prettier": "error",

            quotes: ["error", "double"],
            semi: ["error", "always"],

            "@typescript-eslint/explicit-function-return-type": "warn",
            "@typescript-eslint/explicit-module-boundary-types": "warn",
            "@typescript-eslint/no-unused-vars": "warn",

            "import/order": [
                "warn",
                {
                    groups: [
                        ["builtin", "external"],
                        "internal",
                        ["parent", "sibling", "index"]
                    ],
                    "newlines-between": "always"
                }
            ]
        }
    },

    prettierConfig
];
