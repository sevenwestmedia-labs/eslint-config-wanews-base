# WANews eslint config

Configured for typescript

## Config

### .vscode/settings.json
[![Build Status](https://travis-ci.com/sevenwestmedia-labs/eslint-config-wanews-base.svg?branch=master)](https://travis-ci.com/sevenwestmedia-labs/eslint-config-wanews-base)

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
