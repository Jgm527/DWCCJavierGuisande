import js from "@eslint/js";
import globals from "globals";

export default [
    {
        // Carpetas que ESLint no debe revisar nunca
        ignores: ["**/node_modules/**", "**/dist/**", "**/vendor/**"]
    },
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "script",
            globals: { ...globals.browser }
        },
        rules: {
            "no-unused-vars": ["warn", { vars: "local" }],
            "eqeqeq": "warn",
            "prefer-const": "warn"
        }
    },
    {
        // Ficheros .mjs (por ejemplo este mismo) usan import/export
        files: ["**/*.mjs"],
        languageOptions: {
            sourceType: "module"
        }
    }
];
