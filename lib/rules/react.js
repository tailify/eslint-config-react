'use strict';

module.exports = {
  overrides: [
    {
      files: ['**/*.{spec,test}.js'],
      rules: {
        // disallow JSX props spreading
        'react/jsx-props-no-spreading': 'off',
      },
    },
  ],
  rules: {
    // enforces consistent naming for boolean props
    'react/boolean-prop-naming': [
      'error',
      {
        message: '',
        propTypeNames: ['bool', 'mutuallyExclusiveTrueProps'],
        rule: '^(can|is|has)[A-Z]([A-Za-z0-9]?)+',
        validateNested: true,
      },
    ],

    // enforces consistent usage of destructuring assignment in component
    'react/destructuring-assignment': ['error', 'always', { ignoreClassFields: true }],

    // prevent missing displayName in a React component definition
    'react/display-name': ['error', { ignoreTranspilerName: false }],

    // forbid foreign `propTypes`
    'react/forbid-foreign-prop-types': ['error', { allowInPropTypes: true }],

    // restrict file extensions that may contain JSX
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.mjs'] }],

    // enforce shorthand or standard form for React fragments
    'react/jsx-fragments': ['error', 'syntax'],

    // enforce event handler naming conventions in JSX
    'react/jsx-handler-names': [
      'error',
      {
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on',
      },
    ],

    // validate JSX has key prop when in array or iterator
    'react/jsx-key': 'error',

    // disallow JSX props spreading
    'react/jsx-props-no-spreading': [
      'error',
      {
        custom: 'enforce',
        exceptions: [
          'FormattedDate',
          'FormattedHTMLMessage',
          'FormattedMessage',
          'FormattedNumber',
          'FormattedPlural',
          'FormattedRelative',
          'FormattedTime',
        ],
        html: 'enforce',
      },
    ],

    // enforce props alphabetical sorting
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: false,
        ignoreCase: true,
        noSortAlphabetically: false,
        reservedFirst: true,
        shorthandFirst: false,
        shorthandLast: false,
      },
    ],

    // prevent direct mutation of `this.state`
    'react/no-direct-mutation-state': 'error',

    // prevent usage of unsafe lifecycle methods
    'react/no-unsafe': ['error', { checkAliases: true }],

    // enforce component methods order
    'react/sort-comp': [
      'error',
      {
        groups: {
          lifecycle: [
            'constructor',
            'getDerivedStateFromProps',
            'componentWillMount',
            'UNSAFE_componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'UNSAFE_componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'UNSAFE_componentWillUpdate',
            'getSnapshotBeforeUpdate',
            'componentDidUpdate',
            'getDerivedStateFromError',
            'componentDidCatch',
            'componentWillUnmount',
          ],
          rendering: ['/^render.+$/', 'render'],
          'static-methods': [
            'displayName',
            'defaultProps',
            'propTypes',
            'contextType',
            'defaultProps',
          ],
        },
        order: [
          'static-methods',
          'instance-variables',
          'lifecycle',
          '/^(handle|on).+$/',
          'getters',
          'setters',
          'instance-methods',
          'everything-else',
          'rendering',
        ],
      },
    ],

    // enforce propTypes declarations alphabetical sorting
    'react/sort-prop-types': [
      'error',
      {
        callbacksLast: false,
        ignoreCase: true,
        requiredFirst: false,
        sortShapeProp: true,
      },
    ],

    // enforce the state initialization style to be a class property
    'react/state-in-constructor': 'never',

    // defines where React component static properties should be positioned
    'react/static-property-placement': ['error', 'static public field'],
  },
  settings: {
    linkComponents: [{ linkAttribute: 'to', name: 'Link' }],
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
};
