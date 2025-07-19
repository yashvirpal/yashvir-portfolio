const fs = require('fs');
const path = require('path');

function generateTree(dir, prefix = '') {
  const files = fs.readdirSync(dir).filter(f => f !== 'node_modules'); // exclude node_modules
  let treeStr = '';

  files.forEach((file, index) => {
    const isLast = index === files.length - 1;
    const connector = isLast ? '└── ' : '├── ';
    treeStr += prefix + connector + file + '\n';

    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      const newPrefix = prefix + (isLast ? '    ' : '│   ');
      treeStr += generateTree(fullPath, newPrefix);
    }
  });

  return treeStr;
}

const rootDir = path.resolve(__dirname); // or specify your project root path
const tree = generateTree(rootDir);

fs.writeFileSync('structure.txt', tree);
console.log('Project structure saved to structure.txt excluding node_modules');
