const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get("/facebook", passport.authorize("facebook", { scope: ["email"] }));

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", { successRedirect: "/", failureRedirect: "/api/login" })
);

module.exports = router;
