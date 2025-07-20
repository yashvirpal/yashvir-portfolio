const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts'); // ✅ Add this
require('dotenv').config();  // Load env once here

const app = express();
const port = process.env.PORT || 3000;

// Set EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(expressLayouts); // ✅ Enable layouts
app.set('layout', 'layout'); // ✅ Default layout file
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
  res.locals.req = req;
  res.locals.baseUrl = `${req.protocol}://${req.get('host')}`;
  next();
});

// Routes
const mainRoutes = require('./routes/index');
app.use('/', mainRoutes);



const recaptcha = require('./api/index');
app.locals.recaptchaSiteKey = recaptcha.siteKey;
console.log('Loaded RECAPTCHA_SITE_KEY::', recaptcha.siteKey);  // check what prints

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
