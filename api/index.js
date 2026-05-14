const path = require('path');

// Point views and public to src/ paths (relative to project root on Vercel)
process.env.VIEWS_PATH  = path.join(__dirname, '..', 'src', 'views');
process.env.PUBLIC_PATH = path.join(__dirname, '..', 'public');

const app = require('../src/app.js');

module.exports = app;
