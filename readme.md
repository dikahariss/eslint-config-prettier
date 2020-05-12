# VSCODE ESLint, Prettier dan Airbnb Style Guide

## Install Extention VSCODE

1. [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Membuat file package.json

```
npm init -y
```

## Install ESLint

```
sudo npm i -g eslint
```

## Install devDependencies

```
npm i -D eslint prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-node eslint-config-node eslint-plugin-html babel-eslint
```

## Install ESLint Config Airbnb

```
npx install-peerdeps --dev eslint-config-airbnb
```

## Membuat File Config ESLint

```
eslint --init
```

sesuaikan isian file `.eslintrc.json`

```
{
  "extends": ["airbnb", "prettier", "plugin:node/recommended"],
  "plugins": ["prettier"],
  "rules": {
    "no-unused-vars": "warn",
    "no-console": "off",
    "no-process-exit": "off",
    "class-methods-use-this": "off"
  }
}
```

### Referensi

1. [Traversy Media](https://www.youtube.com/watch?v=SydnKbGc7W8)
2. [Wes Bos](https://www.youtube.com/watch?v=lHAeK8t94as)
