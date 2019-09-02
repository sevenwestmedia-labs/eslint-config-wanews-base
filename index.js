"use strict"

module.exports = {
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "prettier/@typescript-eslint",
    ],
    rules: {
        "@typescript-eslint/explicit-function-return-type": 0,
        "@typescript-eslint/no-non-null-assertion": 0,
        "@typescript-eslint/no-use-before-define": 0,
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/array-type": [1, { default: "array-simple" }],
        "no-prototype-builtins": 0,
    },
}
