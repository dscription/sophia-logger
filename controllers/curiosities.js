const Curiosity = require("../models/curiosity");
const User = require("../models/user");

module.exports = {
  create,
  getAll,
};

function getAll(req, res) {
  console.log("getting all");
}

function create(req, res) {
  Curiosity.create(req.body).then((newCuriosity) => {
    User.findById(req.body.userId).then((foundUser) => {
      foundUser.curiosities.push(newCuriosity._id);
      foundUser.save();
    });
    res.status(200).json(newCuriosity);
  });
}
