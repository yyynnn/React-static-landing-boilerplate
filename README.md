# MTSBANK site-app

This is SPA boilerplate for mtsbank new site app.

## Features

Initial stack is this:

- [**Building**](#building) - Webpack, Babel
- [**UI**](#interfacing) - React
- [**State managment**](#interfacing) - Redux
- [**Frontend routing**](#interfacing) - React-router
- [**CSS framework**](#frameworking) - Reactstrap (bootstrap 4)
- [**Styling**](#styling) - PostCSS + CCS Modules or Styled-components
- [**Testing**](#testing) - Jest + Enzyme
- [**Linting**](#linting) - ESlint+Prettier (JS) / Stylelint (CSS)
- **Static Types** - Flow (not yet integrated)
- **Packages** - NPM or Yarn
- [**Dev Server**](#tooling) - Express (future integration with Laravel needed for SSR and etc.)


## Installation

0. Clone this repo to desired directory
1. Move to this directory with `cd`
2. Run `npm install` command in console
3. Run `npm run dev` to start the express dev server
4. Run `npm run test` to test this app. More commands for testing purposes provided, such as:
    - `test:watch` - to run tests in watch mode / rerun test on changes
    - `test:coverage` - to generate test coverage report in HTML format. Located in the "coverage" folder
    - `test:update` - to update test's snapshots after app altering
5. Finally run `npm run build` to build bundle to production


## Contents

### Transpiling

**babel-cli** - command-line interface for babel. This will provide you with `babel-node` for server-side ES6+
**babel-core** - it is what it is
**babel-plugin-react-css-modules** - preformant babel plugin. Adds `styleName` attribute to specify CSS module styles separately. Like this:
```javascript
<Component styleName="foo.a" className="regular styles"></Component>;
```
**babel-preset-es2015** - babel es2015 plugin pack
**babel-preset-latest** - all latest es2015+ plugin packs
**babel-preset-react** - babel react plugin pack
**babel-preset-stage-0** - exprerimental ES features, just in case


### Linting

**eslint** - uniform JS writing style and error-catching
**eslint-config-prettier** - config for `eslint-plugin-prettier` to evade conflicts with Prettier
**eslint-plugin-prettier** - enables Prettier as plugin for Eslint
**eslint-plugin-react** - react linting rules for Eslint
**stylelint** - uniform CSS writing style and error-catching
**stylelint-webpack-plugin** - stylint loader for webpack
**stylelint-config-standard** - standard rule set, config as a dependency
**prettier** - magical formating for CSS

### Building

**webpack** - module bundler. All asstets to js, from js to static assets
**webpack-bundle-analyzer** - eye-candy webpack asset tree-map viewer. http://127.0.0.1:8888/ to see shit in action
**eslint-loader** - eslint loader for webpack
**style-loader** - Adds CSS to the DOM by injecting a `<style>` tag
**file-loader** - emits a file and returns its URL
**react-hot-loader** - HMR yay
**css-loader** - interprets `@import` and `url()` like `import/require()` and will resolve them
**image-webpack-loader** - image loader/optimizer used by file-loader
**extract-text-webpack-plugin** - extracts text to a desired file. Mainly used for spitting the `.css` files in production
**html-webpack-plugin** - html file from template generator. Used in production
**svg-url-loader** - resolves svg-images in css files as utf-8 encoded DataUrl string. Can be used it JS and CSS. Used in CSS
**url-loader** - loads files as `base64` encoded URL. Resolves font files in CSS
**react-svg-loader** - gives ability to import and load `.svg` inside the react component
**babel-loader** - allows webpack to compile ES6+ code
**postcss-loader** - weback postcss loader

### Testing

**enzyme** - a JavaScript Testing utility for `react` that makes it easier to assert, manipulate, and traverse React Components' output.
**enzyme-to-json** - convert `enzyme` wrappers to a format compatible with `jest` snapshot testing.
**identity-obj-proxy** - object mocks. Useful for testing trivial webpack imports.
**jest** - testing library
**react-addons-test-utils** - `react` test utility. Added only as a required dependency
**react-test-renderer** - renders React components to pure JavaScript objects without depending on the DOM
**redux-mock-store** - mocks `redux` store :)
**babel-jest** - `babel` plugin for `jest`. Allows `jest` to recognize and compile ES6+

### Tooling

**nodemon** - file watcher for server. Restarts server on file change. Manualy restart server with `rs` command
**express** - node.js framework
**cross-env** - crossplatform env variable helper
**webpack-dev-middleware** - wrapper for webpack use in server. Dev only
**webpack-hot-middleware** - webpack HMR
**redux-devtools-extension** - browser redux devtool enabler

### Styling

**postcss** - CSS transform with JS plugins
**postcss-clearfix** - clearfix
**postcss-cssnext** - kinda "CSS4" tool set
**postcss-for** - for iteration inside CSS
**postcss-import** - CSS imports

### Frameworking

**bootstrap** - added for bootstrap.css to use in `reactstrap`
**reactstrap** - bootstrap 4 react components
(New UI Kit needed)

### Interfacing
**classnames** - conditional joining of classNames
**history** - window.History abstraction
**prop-types** - incoming data type checking tool
**react** - interface library
**react-dom** - react DOM methods
**react-formik** - react forms
**react-redux** - react redux bindings
**react-router** - routing
**react-router-config** - Static route configuration helpers for React Router.
**react-router-dom** DOM bindings to router
**react-router-redux** Redux bindings to router
**react-transition-group** - react components transition API. Mount/unmount animation
**redux** - app's state managment paradigm
**redux-thunk** - dispatch actions as functions

(more packages to be added/changed)
