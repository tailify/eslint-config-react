'use strict';

module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'eslint-config-airbnb',
    '@tailify/eslint-config',
    './rules/react.js',
    './rules/react-a11y.js',
    'prettier/react',
  ],
};
