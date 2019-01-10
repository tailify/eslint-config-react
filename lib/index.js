'use strict';

module.exports = {
  env: {
    browser: true,
  },
  extends: [
    '@tailify/eslint-config',
    'eslint-config-airbnb/rules/react.js',
    'eslint-config-airbnb/rules/react-a11y.js',
    './rules/react.js',
    './rules/react-a11y.js',
    'prettier/react',
  ],
};
