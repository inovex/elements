module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "prettier",
    "prettier/@typescript-eslint"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module"
  },
  plugins: [
    "eslint-plugin-no-null",
    "eslint-plugin-prefer-arrow",
    "eslint-plugin-react",
    "@typescript-eslint"
  ],
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-unnecessary-type-assertion": "off",
    "@typescript-eslint/unbound-method": "error",
    "comma-dangle": "off",
    "import/no-unassigned-import": "off",
    "no-cond-assign": "off",
    "no-null/no-null": "off",
    "no-template-curly-in-string": "error",
    "prefer-arrow/prefer-arrow-functions": "error",
    "react/jsx-boolean-value": [
      "error",
      "never"
    ],
    "react/jsx-curly-spacing": [
      "error",
      {
        "when": "never"
      }
    ],
    "react/jsx-equals-spacing": "off",
    "react/jsx-key": "off",
    "react/jsx-no-bind": "off",
    "react/no-find-dom-node": "off",
    "react/jsx-tag-spacing": [
      "off",
      {
        "afterOpening": "allow",
        "closingSlash": "allow"
      }
    ],
    "react/jsx-wrap-multilines": "off",
    "react/react-in-jsx-scope": "off",
    "react/self-closing-comp": "off"
  }
}
