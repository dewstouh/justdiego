# @justdiego/eslint-config

Shared ESLint configurations for consistent code styling and linting across the monorepo.

## Contents

- `base.js` - Base ESLint configuration
- `next.js` - Next.js specific rules
- `react-internal.js` - React component linting

## Usage

```javascript
module.exports = {
  extends: ['@justdiego/eslint-config/base']
};
```