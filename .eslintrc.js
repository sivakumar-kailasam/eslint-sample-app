const ERROR_LEVEL = 2;

module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  plugins: [
    'ember'
  ],
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended',
    'plugin:you-dont-need-lodash-underscore/compatible'
  ],
  env: {
    browser: true
  },
  rules: {
    'ember/no-attrs-in-components': ERROR_LEVEL,
    'ember/no-duplicate-dependent-keys': ERROR_LEVEL,
    'ember/no-global-jquery': ERROR_LEVEL,
    'ember/require-super-in-init': ERROR_LEVEL,
  }
};
