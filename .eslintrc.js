// Docs: https://eslint.org/docs/latest/use/getting-started
// Docs: https://github.com/jsx-eslint/eslint-plugin-react#configuration

// stylelint (in `.stylelintrc.json`)
// get-started: https://stylelint.io/user-guide/get-started/
// customize:   https://stylelint.io/user-guide/customize/

module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    // Docs: https://www.npmjs.com/package/eslint-plugin-promise
    'plugin:promise/recommended',
    'plugin:react/jsx-runtime',
    // Docs: https://github.com/testing-library/eslint-plugin-testing-library
    'plugin:testing-library/react',
    // Docs: https://github.com/testing-library/eslint-plugin-jest-dom
    'plugin:jest-dom/recommended',
    // Docs: https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb
    'airbnb',
    'airbnb/hooks',
    // Docs: https://prettier.io/docs/en/install.html
    // Docs: https://github.com/prettier/eslint-config-prettier
    // "prettier",
    // Docs: https://www.npmjs.com/package/eslint-plugin-prettier
    'plugin:prettier/recommended',
  ],
  // Docs: https://typescript-eslint.io/getting-started/
  parser: '@typescript-eslint/parser',
  // Docs: https://typescript-eslint.io/getting-started/
  root: true,
  overrides: [
    // Docs: https://github.com/testing-library/eslint-plugin-testing-library
    // Now we enable eslint-plugin-testing-library rules or preset only for matching testing files
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
    // Different lint rules for JavaScript and TypeScript files
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'standard-with-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        // Docs: https://www.npmjs.com/package/eslint-config-airbnb-typescript
        'airbnb-typescript',
        'plugin:prettier/recommended',
      ],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    // Docs: https://www.npmjs.com/package/eslint-plugin-promise
    'promise',
    '@typescript-eslint',
    // Docs: https://github.com/testing-library/eslint-plugin-testing-library
    'testing-library',
    // Docs: https://github.com/testing-library/eslint-plugin-jest-dom
    'jest-dom',
    // Docs: https://www.npmjs.com/package/eslint-plugin-prettier
    'prettier',
    // 'redux-saga',
  ],
  // Docs: https://eslint.org/docs/latest/rules/
  rules: {
    // For Redux toolkit
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state'],
      },
    ],
    // Docs: https://eslint.org/docs/latest/rules/no-prototype-builtins
    'no-prototype-builtins': 'off',
    // Docs: https://basarat.gitbook.io/typescript/main-1/defaultisbad
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    // "Missing file extension "ts" import/extensions"
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    // Docs: https://www.npmjs.com/package/eslint-plugin-prettier
    'prettier/prettier': 'error',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    // Docs: https://eslint.org/docs/latest/rules/semi
    // semi: ["error", "always"],
    // Docs: https://eslint.org/docs/latest/rules/quotes
    // quotes: ["error", "double"],
    // Docs: https://github.com/testing-library/eslint-plugin-testing-library
    'testing-library/await-async-query': 'error',
    'testing-library/no-await-sync-query': 'error',
    'testing-library/no-debugging-utils': 'warn',
    'testing-library/no-dom-import': 'off',
    // JS vs JSX
    // Doc: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    // If you wanted to allow both '.jsx' and '.js', the configuration would be:
    // "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
  },
  //
  settings: {
    // "Missing file extension "ts" import/extensions"
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    // --------------------------------------------------------------------------------------
    // React settings start: https://github.com/jsx-eslint/eslint-plugin-react#configuration
    react: {
      createClass: 'createReactClass', // Regex for Component Factory to use,
      // default to "createReactClass"
      pragma: 'React', // Pragma to use, default to "React"
      fragment: 'Fragment', // Fragment to use (may be a property of <pragma>), default to "Fragment"
      version: 'detect', // React version. "detect" automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      // It will default to "latest" and warn if missing, and to "detect" in the future
      flowVersion: '0.53', // Flow version
    },
    propWrapperFunctions: [
      // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
      'forbidExtraProps',
      { property: 'freeze', object: 'Object' },
      { property: 'myFavoriteWrapper' },
      // for rules that check exact prop wrappers
      { property: 'forbidExtraProps', exact: true },
    ],
    componentWrapperFunctions: [
      // The name of any function used to wrap components, e.g. Mobx `observer` function. If this isn't set, components wrapped by these functions will be skipped.
      'observer', // `property`
      { property: 'styled' }, // `object` is optional
      { property: 'observer', object: 'Mobx' },
      { property: 'observer', object: '<pragma>' }, // sets `object` to whatever value `settings.react.pragma` is set to
    ],
    formComponents: [
      // Components used as alternatives to <form> for forms, eg. <Form endpoint={ url } />
      'CustomForm',
      { name: 'Form', formAttribute: 'endpoint' },
    ],
    linkComponents: [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      'Hyperlink',
      { name: 'Link', linkAttribute: 'to' },
    ],
  },
  // React settings end
  // --------------------------------------------------------------------------------------
};
