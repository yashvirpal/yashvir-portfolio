const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts'); // ✅ Add this

const app = express();
const port = process.env.PORT || 3000;

// Set EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(expressLayouts); // ✅ Enable layouts
app.set('layout', 'layout'); // ✅ Default layout file
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const mainRoutes = require('./routes/index');
app.use('/', mainRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
