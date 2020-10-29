const express = require("express");
const router = express.Router();
const { User, Favourite } = require("../models/index");
const passport = require("passport");

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

router.get("/users", (req, res, next) => {
  User.findAll({})
    .then((users) => res.json(users))
    .catch(next);
});

router.delete("/users/:id", (req, res, next) => {
  console.log(req.params.id);
  User.findByPk(req.params.id)
    .then((user) => user.destroy())
    .then(() => res.sendStatus(204))
    .catch(next);
});

router.get("/favs", (req, res, next) => {
  Favourite.findAll({})
    .then((favourites) => res.json(favourites))
    .catch(next);
});

router.post("/favs", (req, res, next) => {
  Favourite.create({ ...req.body.movie, userId: req.user.id })
    .then((favourite) => res.status(201).send(favourite))
    .catch(next);
});

router.delete("/favs/:id", (req, res, next) => {
  Favourite.findByPk(req.params.id)
    .then((fav) => fav.destroy())
    .then(() => res.sendStatus(204))
    .catch(next);
});

router.use("/", function (req, res) {
  res.sendStatus(404);
});

module.exports = router;
