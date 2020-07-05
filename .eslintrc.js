module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    'standard',
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/vue',
    //'plugin:nuxt/recommended',
  ],
  plugins: ["prettier"],
  // add your custom rules here
  rules: {}
}
