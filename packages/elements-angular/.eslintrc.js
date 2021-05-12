module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
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
    "eslint-plugin-import",
    "eslint-plugin-jsdoc",
    "@angular-eslint/eslint-plugin",
    "@angular-eslint/eslint-plugin-template",
    "eslint-plugin-prefer-arrow",
    "eslint-plugin-react",
    "@typescript-eslint"
  ],
  ignorePatterns: [
    "**/proxies*.ts",
    "elements/src/directives/angular-component-lib/utils.ts"
  ],
  rules: {
    "@angular-eslint/component-class-suffix": "error",
    "@angular-eslint/directive-class-suffix": "error",
    "@angular-eslint/no-conflicting-lifecycle": "error",
    "@angular-eslint/no-host-metadata-property": "error",
    "@angular-eslint/no-input-rename": "error",
    "@angular-eslint/no-inputs-metadata-property": "error",
    "@angular-eslint/no-output-native": "error",
    "@angular-eslint/no-output-on-prefix": "error",
    "@angular-eslint/no-output-rename": "error",
    "@angular-eslint/no-outputs-metadata-property": "error",
    "@angular-eslint/template/banana-in-box": "off",
    "@angular-eslint/template/no-negated-async": "off",
    "@angular-eslint/use-lifecycle-interface": "error",
    "@angular-eslint/use-pipe-transform-interface": "error",
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/explicit-member-accessibility": [
      "off",
      {
        "accessibility": "explicit"
      }
    ],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/member-ordering": "error",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-inferrable-types": [
      "error",
      {
        "ignoreParameters": true
      }
    ],
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/quotes": [
      "error",
      "single"
    ],
    "arrow-parens": [
      "off",
      "always"
    ],
    "brace-style": [
      "off",
      "off"
    ],
    "comma-dangle": "off",
    "import/no-deprecated": "warn",
    "import/order": "off",
    "max-classes-per-file": "off",
    "max-len": [
      "error",
      {
        "code": 140
      }
    ],
    "no-console": [
      "error",
      {
        "allow": [
          "log",
          "warn",
          "dir",
          "timeLog",
          "assert",
          "clear",
          "count",
          "countReset",
          "group",
          "groupEnd",
          "table",
          "dirxml",
          "error",
          "groupCollapsed",
          "Console",
          "profile",
          "profileEnd",
          "timeStamp",
          "context"
        ]
      }
    ],
    "no-empty": "off",
    "no-fallthrough": "error",
    "no-multiple-empty-lines": "off",
    "no-restricted-imports": [
      "error",
      "rxjs/Rx"
    ],
    "quote-props": [
      "error",
      "as-needed"
    ]
  }
}
