module.exports =  {
  parser:  '@typescript-eslint/parser',
  extends:  [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  plugins : [
    "react",
    "react-native",
    "prettier"
  ],
  parserOptions:  {
    ecmaVersion:  2018,
    sourceType:  'module',
    "ecmaFeatures": {
      "jsx": true
    },
  },
  rules:  {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': "off",
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": 0,
  },
  settings:  {
    react:  {
      version:  'detect',
    },
  },
};
