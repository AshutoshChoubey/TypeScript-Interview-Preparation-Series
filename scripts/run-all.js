#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', 'dist');
if (!fs.existsSync(distDir)) {
  console.error('dist directory not found. Run `npm run build` first.');
  process.exit(1);
}

const files = fs.readdirSync(distDir).filter((f) => f.endsWith('.js')).sort();
if (files.length === 0) {
  console.log('No JS files found in dist/');
  process.exit(0);
}

for (const file of files) {
  console.log('\n--- Running', file, '---');
  try {
    require(path.join(distDir, file));
  } catch (err) {
    console.error('Error while running', file, err);
  }
}
