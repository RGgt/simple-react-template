This template is for a client-side React project with routing, DI and state management.

Configured with:
* [React](https://react.dev/),
* [Vite](https://vitejs.dev/),
* [Typescript](https://www.typescriptlang.org/),
* [ESLint](https://eslint.org/)
* [Prettier](https://prettier.io/)
* [React Router](https://reactrouter.com/)
* [Redux Toolkit](https://redux-toolkit.js.org/)
* [Typed Inject](https://github.com/nicojs/typed-inject) *

`Typed Inject` has a few a few advantages over other dependency injection libraries
* it is **type safe**
* there is a [blog page](https://medium.com/@jansennico/advanced-typescript-type-safe-dependency-injection-873426e2cc96) describing **how the internals of the library work**
* **does not use the old & experimental decorators** of TypeScript. Note: the project uses Typescript 5, which includes built-in decorators, which are not compatible with reflect-metadata type of decorators.
* it shows signs of being **actively maintained**, by having a few commits in the last 2 quarters
