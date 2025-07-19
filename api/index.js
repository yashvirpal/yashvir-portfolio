const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const app = express();

// Setup EJS with layouts
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));
app.use(expressLayouts);
app.set('layout', 'layout');

// Serve static assets from public
app.use(express.static(path.join(__dirname, '../public')));

// Use your routes
const mainRoutes = require('../routes/index');
app.use('/', mainRoutes);

module.exports = app;
