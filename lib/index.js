'use strict';

module.exports = {
  env: {
    browser: true,
  },
  extends: [
    '@tailify/eslint-config',
    './rules/react.js',
    './rules/react-a11y.js',
    'jest-enzyme',
    'prettier/react',
  ],
};
