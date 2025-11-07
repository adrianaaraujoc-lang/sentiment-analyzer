module.exports = {
  // Define o ambiente de execução (Browser/Node) e globais
  env: {
    browser: true,
    es2020: true,
    node: true
  },
  // Define o parser para TypeScript
  parser: '@typescript-eslint/parser',
  // Configurações do parser
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    // Permite que o ESLint use os arquivos tsconfig para resolução de módulos
    project: ['./tsconfig.json', './apps/*/tsconfig.json', './apps/*/tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  // Plugins essenciais
  plugins: [
    'react-refresh',
    '@typescript-eslint',
    'react-hooks'
  ],
  // Regras de linting
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    // Regra para resolver imports em TS
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },
  rules: {
    // Desativa a regra do React 17+ (novo JSX runtime não exige import do React)
    'react/react-in-jsx-scope': 'off', 
    // Regras de hook mais rigorosas
    'react-hooks/rules-of-hooks': 'error', 
    'react-hooks/exhaustive-deps': 'warn',
    // Regra específica para o Vite/SWC
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // TypeScript
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
  }
};