# 👨‍💻 @sj-distributor/eslint-plugin-react-native

[![Npm Version](https://img.shields.io/npm/v/npm.svg)](https://www.npmjs.com/package/@sj-distributor/eslint-plugin-react-native)
[![MIT License](https://img.shields.io/npm/l/react-native-tab-view.svg?style=flat-square)](https://www.npmjs.com/package/@sj-distributor/eslint-plugin-react-native)
[![downloads](https://img.shields.io/npm/dm/eslint-config-standard.svg)](https://www.npmjs.com/package/@sj-distributor/eslint-plugin-react-native)
[![Ci](https://github.com/sj-distributor/eslint-plugin-react-native/actions/workflows/ci.yml/badge.svg)](https://github.com/sj-distributor/eslint-plugin-react-native/actions/workflows/ci.yml)

ESLint presets for react native

### [中文文档](https://github.com/sj-distributor/eslint-plugin-react-native/blob/master/README-ZH.md)

## Installation

You'll first need to install [ESLint](https://eslint.org/) and the agreed third-party plug-in package:

```sh
yarn add eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-import eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-simple-import-sort eslint-plugin-unicorn prettier typescript eslint-plugin-eslint-plugin --dev
```

Next, install `@sj-distributor/eslint-plugin-react-native`:

```sh
yarn add @sj-distributor/eslint-plugin-react-native --dev
```

## Usage

Add `eslint-plugin-react-native` to the extends section of your `.eslintrc` configuration file:

```json
{
  "extends": ["plugin:@sj-distributor/react-native/recommended"]
}
```

## What rules are used?

- [eslint](https://eslint.org/)
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier#readme)
- [eslint-plugin-eslint-plugin](https://github.com/eslint-community/eslint-plugin-eslint-plugin#readme)
- [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)
- [eslint-plugin-node](https://github.com/mysticatea/eslint-plugin-node#readme)
- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier#readme)
- [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react)
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [eslint-plugin-react-native](https://github.com/intellicode/eslint-plugin-react-native)
- [eslint-plugin-simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort#readme)
- [@typescript-eslint](https://typescript-eslint.io/)
- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
