module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/extensions': 'off',
    'max-len': [1, 120],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  overrides: [
    {
      files: ['src/store/**/*.js'],
      rules: {
        // Por conta do Vuex, nas mutations teriamos problemas, resolvi remover essa regra apenas nos modulos
        'no-param-reassign': 'off',
      },
    },
  ],
};
