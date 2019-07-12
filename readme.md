# WANews eslint config

Configured for typescript + react

## Config

### .vscode/settings.json

```json
"eslint.validate": [
    "javascript",
    "javascriptreact",
    { "language": "typescript", "autoFix": true },
    { "language": "typescriptreact", "autoFix": true }
]
```

### .eslintrc

```json
{
  "extends": ["wanews"]
}
```

### .eslintignore

```
dist
```
