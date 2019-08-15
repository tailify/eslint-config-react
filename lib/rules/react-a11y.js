'use strict';

module.exports = {
  extends: ['plugin:jsx-a11y/recommended'],
  rules: {
    // enforce all anchors are valid, navigable elements
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
      },
    ],

    // enforce that a control (an interactive element) has a text label
    'jsx-a11y/control-has-associated-label': [
      'error',
      {
        ignoreElements: ['audio', 'canvas', 'embed', 'input', 'textarea', 'tr', 'video'],
        ignoreRoles: [
          'grid',
          'listbox',
          'menu',
          'menubar',
          'radiogroup',
          'row',
          'tablist',
          'toolbar',
          'tree',
          'treegrid',
        ],
        includeRoles: ['alert', 'dialog'],
      },
    ],

    // enforce that `<label>` elements have the `htmlFor` prop
    'jsx-a11y/label-has-for': 'error',

    // enforce that the lang attribute has a valid value
    'jsx-a11y/lang': 'error',

    // enforce that `<audio>` and `<video>` elements have a `<track>` for captions
    'jsx-a11y/media-has-caption': 'off',
  },
};
