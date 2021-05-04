const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
// router.get('/', checkAuth, usersCtrl.index);
// !. Get logged in User, auth takes care of Create User.
router.get('/getMe', usersCtrl.currentUser);



/*---------- Auth Checker ----------*/
// function checkAuth(req, res, next) {
//   if (req.user) return next();
//   return res.status(401).json({ msg: 'Not Authorized' });
// }

module.exports = router;
