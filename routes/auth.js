const express = require("express");
const passport = require("passport");
const router = express.Router();

//Auth con Google
//route   GET /auth/google
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

//Googleauth callback
// ruta   GET /auth/google/callback
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("/dashboard");
  }
);
//fauluresredirect  t lleve a la pag ppL SI HAY ERROR si no que t lleve a dshboard
//Logout user
// /auth/logout
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
