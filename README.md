# template-rn-typescript
Criando um projeto com React-native + typescript + eslint + redux-saga

# Inicialização 
  - Criar o projeto: `npx react-native init <ProjName>`
  - Adicionamos Typescript seguindo os passos de [React-native dev](https://reactnative.dev/docs/typescript)
    - `yarn add -D typescript @types/jest @types/react @types/react-native @types/react-test-renderer`
    - Criamos o `tsconfig.json`
    - Criamos o `jest.config.js`
    - Renomeamos `App.js` para `App.**tsx`**

# Configuração do ESLint
  - Rodar `npx eslint --init`
  - Responder as perguntas com:
  ```
✔ How would you like to use ESLint? · style
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · node
✔ How would you like to define a style for your project? · prompt
✔ What format do you want your config file to be in? · JavaScript
✔ What style of indentation do you use? · tab
✔ What quotes do you use for strings? · single
✔ What line endings do you use? · unix
✔ Do you require semicolons? · No / Yes
  ```

  - Atualizar `eslintconfig.js` 

# Configuração do Husky
  - Rodar `yarn -D husky` e em seguida `husky install`
  - Para rodar o eslint e o prettier antes de cada commit, basta rodar:
  `npx husky add .husky/pre-commit "yarn run lint" &&  npx husky add .husky/pre-commit "npx prettier --write ./src" && npx husky add .husky/pre-commit "yarn run format""`

# Configuração de testes unitários

Configura o Testing Library + Jest como ferramenta de execução de testes. Além de aplicar as configurações voltadas para o React Native.

## Passos

- Instalar as dependências base `@testing-library/jest-dom`, `@testing-library/jest-native` e `@testing-library/react-native`.
- Configurar o arquivo `jest.config.js` com as configurações básicas para os arquivos de teste como, padrão de metch, ferramentas auxiliares, tipos de arquivos e etc.
  - Aplicado configuraçẽs de relatório (collectCoverage e coverageReporters)
  - Configuraçẽs auxiliares (extend-expect)
  - Tipos de arquivos a serem testados (testMatch).

```js
  module.exports = {
    collectCoverage: true, /** Enable report coverage */
    coverageReporters: ['text', 'lcov'], /** Types of reports */
    preset: 'react-native',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"], /** Enable expect tools */
    roots: ["<rootDir>/src"],
    transform: {
      "^.+\\.tsx?$": "ts-jest",
    },
    testMatch: [
      "<rootDir>/src/**/__tests__/*.spec.(ts|tsx)"
    ],
  };
```

## Próximos passos

Configurar testes de snapshots ou pelo menos criar um de exemplo.