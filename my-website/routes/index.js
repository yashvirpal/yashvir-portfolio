const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('pages/home', {
    title: 'Home - My Website',
    description: 'Welcome to my website built with Node.js and EJS'
  });
});

router.get('/about', (req, res) => {
  res.render('pages/about', {
    title: 'About Us - My Website',
    description: 'Learn more about our mission and services'
  });
});

module.exports = router;
