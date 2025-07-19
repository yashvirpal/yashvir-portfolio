const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('pages/home', {
    title: 'Home - My Website',
    description: 'Welcome to my website built with Node.js and EJS'
  });
});

router.get('/about-us', (req, res) => {
  res.render('pages/home', {
    title: 'About Us - My Website',
    description: 'Learn more about our mission and services'
  });
});
router.get('/contact-us', (req, res) => {
  res.render('pages/contact', {
    title: 'Contact Us - My Website',
    description: 'Learn more about our mission and services'
  });
});
router.get('/resume', (req, res) => {
  res.render('pages/resume', {
    title: 'Contact Us - My Website',
    description: 'Learn more about our mission and services'
  });
});
router.get('/portfolio', (req, res) => {
  res.render('pages/portfolio', {
    title: 'Contact Us - My Website',
    description: 'Learn more about our mission and services'
  });
});

module.exports = router;
