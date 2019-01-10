'use strict';

module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'eslint-config-airbnb',
    '@tailify/eslint-config',
    'prettier/react',
    './rules/react.js',
    './rules/react-a11y.js',
  ],
};
