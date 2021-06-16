module.exports = {
  root: true,

  env: {
    node: true,
    browser: true,
  },

  plugins: ["prettier"],

  parserOptions: {
    parser: "babel-eslint",
  },

  extends: [
    "plugin:vue/recommended",
    "eslint:recommended",
    "prettier/vue",
    "plugin:prettier/recommended",
  ],

  rules: {
    "prettier/prettier": "error",
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
  },
};
