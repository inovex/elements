const scopes = require("./commit-scope-enum.js");

module.exports = {
  extends: [
    '@commitlint/config-conventional',
    '@commitlint/config-lerna-scopes'
  ],
  rules: {
    'scope-enum': [2, 'always', scopes]
  }
};
