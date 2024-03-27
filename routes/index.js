var express = require("express");
var router = express.Router();
var passport = require("passport");

var authRouter = require("./auth");
var usersRouter = require("./users");

router.use("/auth", authRouter);

// This is a protected route and available with a valid jwt only
router.use(
  "/users",
  passport.authenticate("jwt", { session: false }),
  usersRouter
);

module.exports = router;
