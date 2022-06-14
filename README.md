# Unite Us Client Portal

Client portal self-service application.

## Getting Started

### Prerequisites

- node `v18.0.0`
- npm `v8.6.0`

### Installation

Clone the Repo and install dependencies

```zsh
  git clone https://github.com/unite-us/client-portal.git
  cd client-portal
  npm install
```

Copy environment variables

```zsh
  cp .env.sample .env
```

### Running the Server

To run the application locally

```zsh
  npm start
```

The default port is set in [.env](.env) to `8787`, but you may use any port you wish\
Open [http://localhost:8787](http://localhost:8787) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Testing

Launch the test runner in the interactive watch mode

```zsh
  npm test
```

Every time you save a file, the tests will re-run for files changed since the last commit.

### Static Testing

__Typescript__ for applying types. | [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/react.html)\
__ESLint__ for linting. | [ESLint - Pluggable JavaScript linter](https://eslint.org/)\
__Prettier__ for formatting. | [Opinionated Code Formatter](https://prettier.io/)

### Unit & Integration Testing

__React Testing Library__ for unit and integration testing. | [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)\
__Jest__ for the test runner. | [Jest](https://jestjs.io/)

### End-to-End Testing

TBD

## Deployment

Builds the app for production to the `build` folder.

```zsh
  npm run build
```

...TBD deployment steps...
