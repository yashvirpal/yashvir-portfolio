const fs = require('fs');
const path = require('path');

function printTree(dir, prefix = '') {
  const files = fs.readdirSync(dir);
  files.forEach((file, index) => {
    const fullPath = path.join(dir, file);
    const isDir = fs.statSync(fullPath).isDirectory();
    const isLast = index === files.length - 1;
    console.log(prefix + (isLast ? '└── ' : '├── ') + file);
    if (isDir) {
      printTree(fullPath, prefix + (isLast ? '    ' : '│   '));
    }
  });
}

printTree(process.cwd());
