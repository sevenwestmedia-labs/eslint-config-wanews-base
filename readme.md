# WANews eslint config
[![Build Status](https://travis-ci.com/sevenwestmedia-labs/eslint-config-wanews-base.svg?branch=master)](https://travis-ci.com/sevenwestmedia-labs/eslint-config-wanews-base) [![Greenkeeper badge](https://badges.greenkeeper.io/sevenwestmedia-labs/eslint-config-wanews-base.svg)](https://greenkeeper.io/)

Configured for typescript

## Config

### .vscode/settings.json

```json
"eslint.validate": [
    "javascript",
    { "language": "typescript", "autoFix": true }
]
```

### .eslintrc

```json
{
  "extends": ["wanews-base"]
}
```

### .eslintignore

```
dist
```

### package.json

```
"lint": "eslint --ext .js,.ts ."
```
