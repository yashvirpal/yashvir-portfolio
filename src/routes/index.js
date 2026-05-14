const express = require('express');
const router = express.Router();
const data = require('../data/portfolio');

// Home page
router.get('/', (req, res) => {
  res.render('home', {
    ...data,
    title: data.meta.title,
    activePage: 'home',
  });
});

// Resume page
router.get('/resume', (req, res) => {
  res.render('resume', {
    ...data,
    title: `${data.person.name} — Résumé`,
    activePage: 'resume',
  });
});

// Projects page
router.get('/projects', (req, res) => {
  res.render('projects', {
    ...data,
    title: `${data.person.name} — Projects`,
    activePage: 'projects',
  });
});

// Contact page
router.get('/contact', (req, res) => {
  res.render('contact', {
    ...data,
    title: `${data.person.name} — Contact`,
    activePage: 'contact',
  });
});

module.exports = router;
