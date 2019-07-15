# WANews eslint config

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
