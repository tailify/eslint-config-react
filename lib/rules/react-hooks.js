'use strict';

module.exports = {
  plugins: ['react-hooks'],
  rules: {
    // forbid missing `useEffect` dependencies
    'react-hooks/exhaustive-deps': 'error',

    // enforce the Rules of Hooks
    'react-hooks/rules-of-hooks': 'error',
  },
};
