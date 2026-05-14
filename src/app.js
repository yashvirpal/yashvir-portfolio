const express = require('express');
const { engine } = require('express-handlebars');
const helmet = require('helmet');
const compression = require('compression');
const path = require('path');

const indexRouter = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 3000;

// Security & compression
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
      fontSrc: ["'self'", 'https://fonts.gstatic.com'],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", 'data:', 'https:'],
    },
  },
}));
app.use(compression());

// View engine — Handlebars
app.engine('hbs', engine({
  extname: '.hbs',
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views/layouts'),
  partialsDir: path.join(__dirname, 'views/partials'),
  helpers: {
    eq: (a, b) => a === b,
    add: (a, b) => a + b,
    padStart: (n) => String(n).padStart(2, '0'),
  },
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', indexRouter);

// 404
app.use((req, res) => {
  res.status(404).render('404', { title: '404 — Page Not Found' });
});

app.listen(PORT, () => {
  console.log(`\n  🚀  Portfolio running at http://localhost:${PORT}\n`);
});

module.exports = app;
