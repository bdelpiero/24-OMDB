const express = require("express");
const router = express.Router();
const { User } = require("../models/index");

router.get("/", (req, res, next) => {
  User.findAll({})
    .then((users) => res.json(users))
    .catch(next);
});

router.delete("/:id", (req, res, next) => {
  User.findByPk(req.params.id)
    .then((user) => user.destroy())
    .then(() => res.sendStatus(204))
    .catch(next);
});

router.put("/:userId/edit", (req, res, next) => {
  User.update(req.body, { where: { id: req.params.id } })
    .then(() => res.sendStatus(201))
    .catch(next);
});

module.exports = router;
