const express = require('express');
const axios = require('axios');
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

// ✅ Define transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

router.post('/', async (req, res) => {
  const { name, email, phone, message, recaptchaToken } = req.body;

  if (!name || !email || !phone || !message || !recaptchaToken) {
    return res.status(400).send('All fields are required.');
  }

  try {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;

    const response = await axios.post(verificationUrl);
    const data = response.data;

    if (!data.success || data.score < 0.5) {
      return res.status(400).send('reCAPTCHA verification failed. Please try again.');
    }
  } catch (error) {
    console.error('reCAPTCHA error:', error);
    return res.status(500).send('reCAPTCHA verification failed. Please try again later.');
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9+\-()\s]{7,}$/;

  if (!emailRegex.test(email)) {
    return res.status(400).send('Invalid email address.');
  }

  if (!phoneRegex.test(phone)) {
    return res.status(400).send('Invalid phone number.');
  }

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: `New Query from ${name}`,
      text: `Phone: ${phone}\n\n${message}`,
      html: `<p>${message}</p><p><strong>Phone:</strong> ${phone}</p><p>From: ${name} (${email})</p>`
    });

     res.redirect('/thankyou');
  } catch (err) {
    console.error(err);
    res.status(500).send('Something went wrong. Please try again.');
  }
});

module.exports = router;
