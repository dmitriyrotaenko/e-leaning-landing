/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard-scss'],
  plugins: ['stylelint-scss'],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'scss/dollar-variable-pattern': '^([a-z0-9]+(-[a-z0-9]+)*)$',
    'scss/selector-no-redundant-nesting-selector': true
  }
};