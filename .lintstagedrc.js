module.exports = {
  '*.md': ['prettier --write', 'git add'],
  "*.{ts,tsx}": ["git add --all", "eslint --fix --cache"]
};
