/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["next"],
  rules: {
    "@next/next/no-sync-scripts": "off",
    "@next/next/no-page-custom-font": "off",
  },
};
