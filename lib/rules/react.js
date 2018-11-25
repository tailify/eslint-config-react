'use strict';

module.exports = {
  rules: {
    // enforces consistent naming for boolean props
    'react/boolean-prop-naming': ['error', {
      propTypeNames: ['bool', 'mutuallyExclusiveTrueProps'],
    }],

    // prevent missing displayName in a React component definition
    'react/display-name': 'error',

    // forbid foreign `propTypes`
    'react/forbid-foreign-prop-types': ['error', { allowInPropTypes: true }],

    // restrict file extensions that may contain JSX
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.mjs'] }],

    // enforce event handler naming conventions in JSX
    'react/jsx-handler-names': 'error',

    // validate JSX has key prop when in array or iterator
    'react/jsx-key': 'error',

    // enforce props alphabetical sorting
    'react/jsx-sort-props': ['error', {
      callbacksLast: false,
      ignoreCase: true,
      noSortAlphabetically: false,
      reservedFirst: true,
      shorthandFirst: false,
      shorthandLast: false,
    }],

    // prevent direct mutation of `this.state`
    'react/no-direct-mutation-state': 'error',

    // enforce component methods order
    'react/sort-comp': ['error', {
      groups: {
        rendering: [
          '/^render.+$/',
          'render',
        ],
      },
      order: [
        'static-methods',
        'instance-variables',
        'lifecycle',
        '/^(handle|on).+$/',
        'getters',
        'setters',
        '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
        'instance-methods',
        'everything-else',
        'rendering',
      ],
    }],

    // enforce propTypes declarations alphabetical sorting
    'react/sort-prop-types': ['error', {
      callbacksLast: false,
      ignoreCase: true,
      requiredFirst: false,
      sortShapeProp: true,
    }],
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.0',
    },
  },
};
