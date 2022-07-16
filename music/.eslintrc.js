module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
  ],

  parserOptions: {
    parser: '@babel/eslint-parser',
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'max-len': 'off',
    'vuejs-accessibility/alt-text': 'off',
    'no-trailing-spaces': 'off',
    'vuejs-accessibility/label-has-for': 'off',
    'eol-last': 'off',
    'vue/no-multiple-template-root':'off',
    'vue/multi-word-component-names': 'off',
    'vuejs-accessibility/click-events-have-key-events': 'off',
    'quotes': 'off',
    'object-curly-newline': 'off',
    'import/no-named-as-default-member': 'off',
  },

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],

  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
};
