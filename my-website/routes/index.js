const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('pages/home', {
    title: 'Home - Yashvir Portfolio',
    description: 'Professional full-stack web development with PHP, Wordpress, Woocomerce, Shopify, Laravel, React, Vue, Node.js, Tailwind CSS, and EJS.'
  });
});

router.get('/about-us', (req, res) => {
  res.render('pages/home', {
    title: 'About Us - Yashvir Portfolio',
    description: 'Learn more about our mission and services'
  });
});
router.get('/contact-us', (req, res) => {
  res.render('pages/contact', {
    title: 'Contact Us - Yashvir Portfolio',
    description: 'Learn more about our mission and services'
  });
});
router.get('/resume', (req, res) => {
  res.render('pages/resume', {
    title: 'Contact Us - Yashvir Portfolio',
    description: 'Learn more about our mission and services'
  });
});
router.get('/portfolio', (req, res) => {
  res.render('pages/portfolio', {
    title: 'Contact Us - Yashvir Portfolio',
    description: 'Learn more about our mission and services'
  });
});

module.exports = router;
