const express     = require('express');
const { engine }  = require('express-handlebars');
const helmet      = require('helmet');
const compression = require('compression');
const path        = require('path');

const indexRouter = require('./routes/index');

const app  = express();
const PORT = process.env.PORT || 3000;

// Allow Vercel wrapper (api/index.js) to override paths via env vars
const VIEWS_PATH  = process.env.VIEWS_PATH  || path.join(__dirname, 'views');
// Root-level public/ is the single source of truth for static files
const PUBLIC_PATH = process.env.PUBLIC_PATH || path.join(__dirname, '..', 'public');

// ── Security & compression ─────────────────────────────────────────
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc:   ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
      fontSrc:    ["'self'", 'https://fonts.gstatic.com'],
      scriptSrc:  ["'self'", "'unsafe-inline'"],
      imgSrc:     ["'self'", 'data:', 'https:'],
    },
  },
}));
app.use(compression());

// ── View engine — Handlebars ───────────────────────────────────────
app.engine('hbs', engine({
  extname:       '.hbs',
  defaultLayout: 'main',
  layoutsDir:    path.join(VIEWS_PATH, 'layouts'),
  partialsDir:   path.join(VIEWS_PATH, 'partials'),
  helpers: {
    eq:       (a, b) => a === b,
    add:      (a, b) => a + b,
    padStart: (n)    => String(n).padStart(2, '0'),
  },
}));
app.set('view engine', 'hbs');
app.set('views', VIEWS_PATH);

// ── Static files ───────────────────────────────────────────────────
app.use(express.static(PUBLIC_PATH));

// ── Routes ─────────────────────────────────────────────────────────
app.use('/', indexRouter);

// ── 404 ────────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).render('404', { title: '404 — Page Not Found' });
});

// ── Local dev server (Vercel invokes the module directly) ──────────
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`\n  🚀  Portfolio running at http://localhost:${PORT}\n`);
  });
}

module.exports = app;
