import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,ts}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: globals.node, // Entorno de Node.js
    },
    plugins: {
      js,
      prettier: 'eslint-plugin-prettier', // Plugin de Prettier
    },
    rules: {
      ...js.configs.recommended.rules,
      'prettier/prettier': ['error', { singleQuote: true, trailingComma: 'es5' }], // Agregar reglas de Prettier
    },
  },
  ...tseslint.configs.recommended, // Configuraciones recomendadas para TypeScript
]);
