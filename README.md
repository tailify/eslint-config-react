# @tailify/eslint-config-react

[![Build status][build-status-image]][build-status-url]
[![Greenkeeper][greenkeeper-image]][greenkeeper-url]
[![Version][version-image]][version-url]

> Tailify's very own opinionated ESLint configuration for React.

## Installation

```
$ npm install --save-dev @tailify/eslint-config-react
```

## Usage

To get started, add this to your `.eslintrc.js` file:

```js
module.exports = {
  extends: ['@tailify/react']
};
```

*Note: We can omit the `/eslint-config` suffix since it is automatically assumed by ESLint.*

[build-status-image]: https://travis-ci.com/tailify/eslint-config-react.svg?branch=master
[build-status-url]: https://travis-ci.com/tailify/eslint-config-react

[greenkeeper-image]: https://badges.greenkeeper.io/tailify/eslint-config-react.svg
[greenkeeper-url]: https://greenkeeper.io

[version-image]: https://img.shields.io/npm/v/@tailify/eslint-config-react.svg
[version-url]: https://www.npmjs.com/package/@tailify/eslint-config-react
