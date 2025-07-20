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
app.use((req, res, next) => {
  res.locals.req = req;
  res.locals.baseUrl = `${req.protocol}://${req.get('host')}`;
  next();
});

// Use your routes
const mainRoutes = require('../routes/index');
app.use('/', mainRoutes);

app.use((req, res) => {
  res.redirect('/');
});

module.exports = app;
