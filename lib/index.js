'use strict';

module.exports = {
  env: {
    browser: true,
  },
  extends: [
    './rules/jest-enzyme.js',
    './rules/react.js',
    './rules/react-a11y.js',
    './rules/react-hooks.js',
    'prettier/react',
  ],
};
