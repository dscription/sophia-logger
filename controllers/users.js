const User = require('../models/user');

module.exports = {
  index,
  currentUser,
};

function index(req, res) {
  User.find({}).then((users) => {
    res.render('users/index', { user: req.user, users });
  });
}

function currentUser(req, res) {
  return res.status(200).json(req.user);
}
