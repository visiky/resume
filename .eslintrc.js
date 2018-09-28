module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "single"],
    semi: ["error", "always"],
    "no-unused-vars": "off" // 关闭规则
  }
};
