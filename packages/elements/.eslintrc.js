module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    "plugin:react/recommended",
    "prettier",
    "prettier/@typescript-eslint"
  ],
  ignorePatterns: [
    "**/*.e2e.ts"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module"
  },
  plugins: [
    "eslint-plugin-no-null",
    "eslint-plugin-react",
    "@typescript-eslint"
  ],
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-unnecessary-type-assertion": "off",
    "@typescript-eslint/unbound-method": "error",
    "comma-dangle": "off",
    "import/no-unassigned-import": "off",
    "no-cond-assign": "off",
    "no-console": "off",
    "no-null/no-null": "off",
    "no-throw-literal": "off",
    "react/jsx-curly-spacing": [
      "error",
      {
        "when": "never"
      }
    ],
    "react/jsx-key": "off",
    "react/jsx-no-bind": "off",
    "react/no-unknown-property": "off",
    "react/jsx-wrap-multilines": "off",
    "react/react-in-jsx-scope": "off",
    "react/self-closing-comp": "off",
    "template-curly-spacing": "off"
  }
}
