# 🔥 React minimal boilerplate

[![License: CC0](https://img.shields.io/badge/license-CC0-blue)](https://github.com/vglinka/react-min-boilerplate/blob/main/LICENSE)

A minimal template for creating a React app without create-react-app (cra).

A small `Hello World` project is in the `src` folder. You can see [Live Demo][liveDemo].

[liveDemo]: https://vglinka.github.io/react-min-boilerplate-demo/

## Includes:

- TypeScript `ts` `tsx`
- Webpack & React + Redux Toolkit
- Jest + React Testing Library (RTL) + user-event
- ESLint airbnb config + Prettier `js` `jsx` `ts` `tsx`
- Stylelint `css` `scss` (`js` `jsx` `ts` `tsx` for Styled Components)
- Styled Components
- React-icons, normalize.css
- Webpack Bundle Analyzer

## Installation

Download:

```sh
git clone https://github.com/vglinka/react-min-boilerplate
```

Install Dependencies:

```sh
cd react-min-boilerplate
npm install
```

# Usage

```sh
npm run test
npm run start
npm run build
npm run analyze
npm run lint
npm run fix
```

# VScode

Prettier is included as an ESLint plugin.
It will start automatically along with ESLint.
You need to install the 
[official eslint plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and
[official Stylelint plugin](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
for VScode.


**settings.json**
```json
"eslint.format.enable": true,
"editor.defaultFormatter": "dbaeumer.vscode-eslint",
"editor.formatOnSave": true,
"editor.formatOnPaste": true,
"editor.formatOnType": true,
// stylelint start
"stylelint.validate": [
  "css",
  "scss",
  "javascript",
  "javascriptreact",
  "typescript",
  "typescriptreact"
],
"editor.codeActionsOnSave": {
  "source.fixAll.stylelint": true
},
"css.validate": false,
"less.validate": false,
"scss.validate": false,
// stylelint end
```

## Contributing workflow

Here’s how we suggest you go about proposing a change to this project:

1. [Fork this project][fork] to your account.
2. [Create a branch][branch] for the change you intend to make.
3. Make your changes to your fork.
4. [Send a pull request][pr] from your fork’s branch to our `main` branch.

Using the web-based interface to make changes is fine too, and will help you
by automatically forking the project and prompting to send a pull request too.

[fork]: https://help.github.com/articles/fork-a-repo/
[branch]: https://help.github.com/articles/creating-and-deleting-branches-within-your-repository
[pr]: https://help.github.com/articles/using-pull-requests/

## License

"No rights reserved" [CC0-1.0](./LICENSE).
