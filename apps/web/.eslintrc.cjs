/* eslint-env node */
// Este arquivo é um stub que aponta para a configuração da raiz do monorepo.

module.exports = {
  // Estende a configuração do arquivo .eslintrc.js na raiz
  extends: '../../.eslintrc.js', 
  // O ESLint precisa saber que ele deve olhar para o diretório pai para o arquivo de configuração
  root: true,
};