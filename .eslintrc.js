module.exports = {
  parser: 'babel-eslint',
  plugins: ['react', 'prettier'],
  env: {
    browser: true,
    node: true
  },
  extends: [
    // "airbnb-base"
    'airbnb',
    'prettier',
    'plugin:prettier/recommended'
  ],
  rules: {
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'never'],
    indent: ['error', 2],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to']
      }
    ],
    'prettier/prettier': 'error',
    'import/prefer-default-export': 'off'
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  }
};
