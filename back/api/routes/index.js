const express = require("express");
const router = express.Router();
const { User, Favourite } = require("../models/index");
const passport = require("passport");
const usersRouter = require("./users");
const favsRouter = require("./favs");

const isLoggedIn = (req, res, next) => {
  if (!req.user) {
    return res.sendStatus(401);
  }
  next();
};

router.use("/users", isLoggedIn, usersRouter);
router.use("/favs", isLoggedIn, favsRouter);

router.post("/register", (req, res) => {
  User.create(req.body).then((user) => res.status(201).send(user));
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.send(req.user);
});

router.post("/logout", (req, res) => {
  req.logout();
  res.sendStatus(200);
});

router.get("/me", (req, res) => {
  if (!req.user) {
    return res.sendStatus(401);
  }

  res.send(req.user);
});

router.use("/", function (req, res) {
  res.sendStatus(404);
});

module.exports = router;
