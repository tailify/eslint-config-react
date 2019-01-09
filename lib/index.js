'use strict';

module.exports = {
  extends: [
    'eslint-config-airbnb',
    '@tailify/eslint-config',
    'prettier/react',
    './rules/react.js',
    './rules/react-a11y.js',
  ],
};
