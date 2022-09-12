const express = require("express");
const router = express.Router();
const curiositiesCtrl = require("../controllers/curiosities");

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
router.get("/", curiositiesCtrl.getAll);
router.post("/", curiositiesCtrl.create);

/*---------- Auth Checker ----------*/
// function checkAuth(req, res, next) {
//   if (req.user) return next();
//   return res.status(401).json({ msg: 'Not Authorized' });
// }

module.exports = router;
