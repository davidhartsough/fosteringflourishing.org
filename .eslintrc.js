module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: "airbnb",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    quotes: ["warn", "double"],
    semi: "off",
    "max-len": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/prop-types": "off",
    "react/no-danger": "off",
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }],
  },
}
