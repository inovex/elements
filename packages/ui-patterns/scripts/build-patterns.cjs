//builds html snippets from patterns folder to dist folder
const fs = require('fs-extra');
const path = require('path');

const srcDir = path.resolve(__dirname, '../src/patterns');
const distDir = path.resolve(__dirname, '../dist');

fs.readdirSync(srcDir).forEach(patternDir => {
  const srcHtmlFile = path.join(srcDir, patternDir, `${patternDir}.html`);
  const distHtmlFile = path.join(distDir, `${patternDir}.html`);

  fs.copyFileSync(srcHtmlFile, distHtmlFile);
});

