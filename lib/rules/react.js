'use strict';

module.exports = {
  extends: ['plugin:react/recommended'],
  overrides: [
    {
      files: ['*.{spec,test}.js'],
      rules: {
        // allow JSX props spreading
        'react/jsx-props-no-spreading': 'off',
      },
    },
  ],
  rules: {
    // enforce consistent naming for boolean props
    'react/boolean-prop-naming': [
      'error',
      {
        propTypeNames: ['bool', 'mutuallyExclusiveTrueProps'],
        rule: '^(can|is|has)[A-Z]([A-Za-z0-9]?)+',
        validateNested: true,
      },
    ],

    // forbid `button` element without an explicit `type` attribute
    'react/button-has-type': 'error',

    // forbid extraneous `defaultProps` on components
    'react/default-props-match-prop-types': 'error',

    // enforce consistent usage of destructuring assignment in component
    'react/destructuring-assignment': ['error', 'always'],

    // forbid foreign prop types
    'react/forbid-foreign-prop-types': 'error',

    // forbid certain prop types
    'react/forbid-prop-types': ['error', { checkChildContextTypes: true, checkContextTypes: true }],

    // enforce boolean attributes notation in JSX
    'react/jsx-boolean-value': 'error',

    // forbid unnecessary curly braces in JSX
    'react/jsx-curly-brace-presence': 'error',

    // restrict file extensions that may contain JSX
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.mjs'] }],

    // enforce shorthand form for React fragments
    'react/jsx-fragments': 'error',

    // enforce event handler naming conventions in JSX
    'react/jsx-handler-names': 'error',

    // forbid duplicate props in JSX
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],

    // enforce PascalCase for user-defined JSX components
    'react/jsx-pascal-case': 'error',

    // disallow JSX props spreading
    'react/jsx-props-no-spreading': 'error',

    // enforce default props alphabetical sorting
    'react/jsx-sort-default-props': ['error', { ignoreCase: true }],

    // enforce props alphabetical sorting
    'react/jsx-sort-props': ['error', { ignoreCase: true, reservedFirst: true }],

    // forbid using `this.state` inside `this.setState`
    'react/no-access-state-in-setstate': 'error',

    // forbid using Array index in `key` props
    'react/no-array-index-key': 'error',

    // report on the use of dangerous JSX properties
    'react/no-danger': 'warn',

    // prevent usage of `setState` in `componentDidMount`
    'react/no-did-mount-set-state': 'error',

    // forbid usage of `setState` in `componentDidUpdate`
    'react/no-did-update-set-state': 'error',

    // forbid multiple component definition per file
    'react/no-multi-comp': ['error', { ignoreStateless: true }],

    // forbid usage of `shouldComponentUpdate` when extending `React.PureComponent`
    'react/no-redundant-should-component-update': 'error',

    // forbid using this in stateless functional components
    'react/no-this-in-sfc': 'error',

    // forbid common casing typos
    'react/no-typos': 'error',

    // forbid usage of unsafe lifecycle methods
    'react/no-unsafe': ['error', { checkAliases: true }],

    // forbid definitions of unused prop types
    'react/no-unused-prop-types': 'error',

    // forbid definitions of unused state properties
    'react/no-unused-state': 'error',

    // forbid usage of `setState` in `componentWillUpdate`
    'react/no-will-update-set-state': 'error',

    // enforce ES5 or ES6 class for React Components
    'react/prefer-es6-class': 'error',

    // enforce stateless React Components to be written as a pure function
    'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],

    // enforce a `defaultProps` definition for every prop that is not a required prop
    'react/require-default-props': ['error', { forbidDefaultForRequired: true }],

    // forbid extra closing tags for components without children
    'react/self-closing-comp': 'error',

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

    // enforce prop types declarations alphabetical sorting
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
    'react/state-in-constructor': ['error', 'never'],

    // enforce where React component static properties should be positioned
    'react/static-property-placement': ['error', 'static public field'],

    // enforce style prop value being an object
    'react/style-prop-object': 'error',

    // forbid void DOM elements (e.g. `<img />`, `<br />`) from receiving children
    'react/void-dom-elements-no-children': 'error',
  },
  settings: {
    linkComponents: [{ linkAttribute: 'to', name: 'Link' }],
    react: {
      version: 'detect',
    },
  },
};
