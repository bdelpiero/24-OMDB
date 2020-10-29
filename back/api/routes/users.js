const express = require("express");
const router = express.Router();
const { User } = require("../models/index");

router.get("/", (req, res, next) => {
  User.findAll({})
    .then((users) => res.json(users))
    .catch(next);
});

router.delete("/:id", (req, res, next) => {
  console.log(req.params.id);
  User.findByPk(req.params.id)
    .then((user) => user.destroy())
    .then(() => res.sendStatus(204))
    .catch(next);
});

module.exports = router;
