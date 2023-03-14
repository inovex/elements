module.exports = {
  extends: ['../../.eslintrc.js', 'plugin:vue/vue3-essential'],
  env: {
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'vue/no-deprecated-slot-attribute': 'off'
  }
};
