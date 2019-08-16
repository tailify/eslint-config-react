'use strict';

module.exports = {
  overrides: [
    {
      files: ['*.{spec,test}.js'],
      globals: {
        mount: true,
        React: true,
        render: true,
        shallow: true,
      },
    },
  ],
};
