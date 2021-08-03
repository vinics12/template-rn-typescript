# template-rn-typescript
Criando um projeto com React-native + typescript + eslint + redux-saga

# Inicialização 
  - Criar o projeto: `npx react-native init <ProjName>`
  - Adicionamos Typescript seguindo os passos de [React-native dev](https://reactnative.dev/docs/typescript)
    - `yarn add -D typescript @types/jest @types/react @types/react-native @types/react-test-renderer`
    - Criamos o `tsconfig.json`
    - Criamos o `jest.config.js`
    - Renomeamos `App.js` para `App.tsx`

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