const express = require("express");
const router = express.Router();
const { User, Favourite } = require("../models/index");

router.get("/", (req, res, next) => {
  Favourite.findAll({})
    .then((favourites) => res.json(favourites))
    .catch(next);
});

router.post("/", (req, res, next) => {
  Favourite.create({ ...req.body.movie, userId: req.user.id })
    .then((favourite) => res.status(201).send(favourite))
    .catch(next);
});

router.delete("/:id", (req, res, next) => {
  Favourite.findByPk(req.params.id)
    .then((fav) => fav.destroy())
    .then(() => res.sendStatus(204))
    .catch(next);
});

module.exports = router;
