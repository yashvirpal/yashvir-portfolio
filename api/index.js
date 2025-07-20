const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const app = express();

// Parse form data before routes
app.use(express.urlencoded({ extended: true }));

// Setup EJS with layouts
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));
app.use(expressLayouts);
app.set('layout', 'layout');

// Serve static assets from public
app.use(express.static(path.join(__dirname, '../public')));

// Make req and baseUrl available in views
app.use((req, res, next) => {
  res.locals.req = req;
  res.locals.baseUrl = `${req.protocol}://${req.get('host')}`;
  next();
});

// Routes
const mainRoutes = require('../routes/index');
const sendContactRoute = require('../routes/send-mail'); // Your send-contact router

app.use('/', mainRoutes);
app.use('/send-mail', sendContactRoute);

// 404 redirect middleware — must be last
app.use((req, res) => {
  res.redirect('/');
});

// Nodemailer transporter (optional if used in send-contact.js)
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const recaptcha = {
  siteKey: process.env.RECAPTCHA_SITE_KEY,
  secretKey: process.env.RECAPTCHA_SECRET_KEY
};
app.locals.recaptchaSiteKey = recaptcha.siteKey;

    


module.exports = app;
