const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
  res.render('pages/home', {
    title: 'Yashvir Portfolio - Full Stack Web Developer | PHP, Laravel, React, Node.js',
    description: 'Professional full-stack web developer specializing in PHP, WordPress, WooCommerce, Shopify, Laravel, React, Vue.js, Node.js, and Tailwind CSS. Custom web solutions and modern development.',
    keywords: 'full stack developer, PHP developer, Laravel, React, Vue.js, Node.js, WordPress, WooCommerce, Shopify, Tailwind CSS, EJS, web development, custom websites, Yashvir'
  });
});

router.get('/about', (req, res) => {
  res.render('pages/about', {
    title: 'About Yashvir - Professional Web Developer & Tech Expert',
    description: 'Learn about Yashvir\'s expertise in full-stack web development, experience with modern frameworks, and passion for creating innovative digital solutions.',
    keywords: 'about Yashvir, web developer background, full stack experience, PHP expert, Laravel specialist, React developer, professional experience'
  });
});

router.get('/contact', (req, res) => {
  res.render('pages/contact', {
    title: 'Contact Yashvir - Get In Touch for Web Development Projects',
    description: 'Ready to start your next web project? Contact Yashvir for professional web development services, custom solutions, and technical consultations.',
    keywords: 'contact web developer, hire PHP developer, Laravel development services, React developer contact, web development consultation, project inquiry'
  });
});

router.get('/resume', (req, res) => {
  res.render('pages/resume', {
    title: 'Yashvir\'s Resume - Full Stack Developer Skills & Experience',
    description: 'View Yashvir\'s professional resume showcasing extensive experience in PHP, Laravel, React, Vue.js, Node.js, WordPress, and modern web development technologies.',
    keywords: 'Yashvir resume, web developer CV, PHP developer resume, Laravel experience, React skills, full stack developer qualifications, technical skills'
  });
});

router.get('/portfolio', (req, res) => {
  res.render('pages/portfolio', {
    title: 'Yashvir\'s Portfolio - Web Development Projects & Case Studies',
    description: 'Explore Yashvir\'s portfolio of web development projects including PHP applications, Laravel systems, React apps, WordPress sites, and e-commerce solutions.',
    keywords: 'web development portfolio, PHP projects, Laravel applications, React projects, WordPress websites, WooCommerce stores, Shopify development, project showcase'
  });
});

module.exports = router;