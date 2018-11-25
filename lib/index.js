'use strict';

module.exports = {
  extends: [
    'eslint-config-airbnb',
    '@tailify/eslint-config',
    './rules/react',
    './rules/react-a11y',
  ].map(require.resolve),
};
