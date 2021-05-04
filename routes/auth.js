const express = require('express');
const router = express.Router();
var passport = require('passport');

router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Login
router.get(
  '/google/oauth2callback',
  passport.authenticate('google', {
    successRedirect: 'http://localhost:3000/menu',
    failureRedirect: 'http://localhost:3000/',
  })
);

// Login
// router.get('/login', function (req, res) {});

// Logout
router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/landing');
});

module.exports = router;
