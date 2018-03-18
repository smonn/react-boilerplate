# React Boilerplate

Setting up a Webpack, Babel, React project.

Assumptions:

- Git, Node.js, yarn, and VS Code are all installed and available in your terminal of choice.
- All shell commands assumes \*nix environment.

Open a terminal and run these commands:

```sh
git init my-project
cd my-project
yarn init -y
code .
```

Create `.gitignore`:

```gitignore
node_modules/
dist/*
!dist/index.html
```

Create `dist/index.html`:

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>My Project</title>
</head>

<body>
  <div id="root"></div>
  <script src="/main.js"></script>
</body>

</html>
```

Install `webpack`, `webpack-cli`, and `webpack-dev-server` and create `src/index.js`:

```sh
yarn add --dev webpack webpack-cli webpack-dev-server
mkdir src && touch src/index.js
```

Add `start` script to `package.json`

```
webpack-dev-server --mode development --content-base dist --history-api-fallback
```

To learn about the options for `webpack-dev-server`, run `yarn webpack-dev-server -h`.

You should now be able to run `yarn start` and edit `src/index.js` and have live reload. Let's setup Babel next.

Install `babel-core`, `babel-loader`, `babel-preset-env`, `babel-preset-stage-2`, and `babel-preset-react`:

```sh
yarn add --dev babel-core babel-loader babel-preset-env babel-preset-stage-2 babel-preset-react
```

We need to tell Webpack how to use the Babel presets we just installed, create `webpack.config.js`:

```js
module.exports = {
  module: {
    rules: [
      {
        // You can use /\.jsx?$/ here to allow .jsx file extensions.
        // If you do, you will also need to set resolve.extensions to
        // > ['.js','.json','.jsx']
        // so Webpack can load the .jsx files.
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
```

Also create `.babelrc` to configure Babel:

```json
{
  "presets": [
    "env",
    "stage-2",
    "react"
  ]
}
```

You can now run `yarn start` again and try some modern JavaScript. Welcome to the future! Next up we get started with React.

Install `react` and `react-dom` (no `--dev` this time):

```sh
yarn add react react-dom
```

Update `src/index.js`:

```js
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

Create `src/App.js`:

```js
import React from 'react';

export default function App() {
  return <div>Hello, World!</div>;
}
```

Next up, let's try to get some CSS into our React app. To avoid more confusing Webpack configurations and dynamic styles, I recommend using a CSS-in-JS library such as `styled-components`, `glamorous`, or `emotion`. Let's try `emotion`:

```sh
yarn add emotion
```

Update `src/index.js`:

```diff
import React from 'react';
import ReactDOM from 'react-dom';
+import { injectGlobal } from 'emotion';

import App from './App';

+injectGlobal({
+  html: {
+    boxSizing: 'border-box'
+  },
+  '*, *::before, *::after': {
+    boxSizing: 'inherit'
+  },
+  body: {
+    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
+    fontSize: '100%',
+    lineHeight: 1.5,
+    margin: 0,
+    color: 'black',
+    backgroundColor: 'white'
+  }
+});
+
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

And `src/App.js`:

```diff
import React from 'react';
+import { css } from 'emotion';

+const styles = {
+  container: css({
+    padding: '1.5rem'
+  })
+};
+
export default function App() {
  return <div className={styles.container}>Hello, World!</div>;
}
```

Next, let's setup testing using `jest` and `enzyme`:

```sh
yarn add --dev jest enzyme enzyme-adapter-react-16
```

Add test script to `package.json`:

```
jest --setupTestFrameworkScriptFile=./testSetup.js
```

Create `testSetup.js`:

```js
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
```

Create `src/App.test.js`:

```js
import React from 'react';
import { mount } from 'enzyme';

import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    mount(<App />);
  });
});
```

Let's add a `build` script to `package.json`:

```
webpack --mode production
```

Alright, let's continue with linting and formatting using `eslint` and `prettier`. There are many ways to achieve this, but I prefer to set this up using a combination of AirBnB's eslint rules and Prettier formatting.

Follow the installation instructions for [AirBnB's eslint configuration](https://www.npmjs.com/package/eslint-config-airbnb). Then install [Prettier using the eslint integration instructions](https://prettier.io/docs/en/eslint.html).

`.eslintrc`:

```json
{
  "parser": "babel-eslint",
  "extends": [
    "airbnb",
    "prettier"
  ],
  "plugins": [
    "prettier"
  ],
  "rules": {
    "prettier/prettier": ["error", {
      "singleQuote": true,
      "trailingComma": "all"
    }],
    "react/jsx-filename-extension": ["error", {"extensions": [".js"]}],
    "import/no-extraneous-dependencies": ["error", {"devDependencies": ["src/**/*.test.js", "testSetup.js"]}]
  },
  "env": {
    "jest": true,
    "browser": true
  }
}
```

Lint script in `package.json`:

```
eslint ./src/ webpack.config.js testSetup.js
```

`.vscode/settings.json`:

```json
{
  "editor.formatOnSave": false,
  "eslint.enable": true,
  "eslint.autoFixOnSave": true,
  "javascript.format.enable": false,
  "javascript.validate.enable": false
}
```
