module.exports = {
  env: {
    node: true,
    jest: true,
  },
  extends: [
      'airbnb-base',
      'plugin:vue/recommended'
    ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  plugins: [
    'vue',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/extensions': 'off',
    'max-len': [1, 120],
  },
  overrides: [
    {
      files: ['src/store/**/*.js'],
      rules: {
        // Por conta do Vuex, nas mutations teriamos problemas, resolvi remover essa regra apenas nos modulos
        'no-param-reassign': 'off',
      },
    },
    ]
};
