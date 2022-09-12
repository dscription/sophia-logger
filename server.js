const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const passport = require("passport");
const session = require("express-session");
const logger = require("morgan");
const cookieParser = require("cookie-parser");

// load the env vars
require("dotenv").config();

// create the Express app
const app = express();

// connect to the MongoDB with mongoose
require("./config/database");
require("./config/passport");

// require our routes
const userRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const curiosityRouter = require("./routes/curiosities");

const cors = require("cors");
app.use(cors());

app.use(express.static(path.join(__dirname, "build")));
app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// mount all routes with appropriate base paths
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/curiosities", curiosityRouter);

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Express is listening on port ${port}.`);
});

module.exports = app;
