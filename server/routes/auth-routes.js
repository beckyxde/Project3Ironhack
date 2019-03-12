const express = require("express");
const authRoutes = express.Router();

const passport = require("passport");

const User = require("../models/User");

const bcrypt = require("bcrypt");
const bcryptSalt = 10;

authRoutes.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/home",
    failureRedirect: "/",
    failureFlash: true,
    passReqToCallback: true
  })
);

authRoutes.get("/", (req, res, next) => {
  res.render("auth/Signup");
});

authRoutes.post("/", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;

  if (username === "" || password === "") {
    res.render("auth/Signup", { message: "Indicate username and password" });
    return;
  }

  User.findOne({ username })
    .then(user => {
      if (user !== null) {
        res.render("auth/Signup", { message: "The username already exists" });
        return;
      }

      const salt = bcrypt.genSaltSync(bcryptSalt);
      const hashPass = bcrypt.hashSync(password, salt);

      const newUser = new User({
        name,
        username,
        password: hashPass
      });

      newUser.save(err => {
        if (err) {
          console.log("err", err);
          res.render("auth/Signup", { message: "Something went wrong" });
        } else {
          res.redirect("/");
        }
      });
    })
    .catch(error => {
      next(error);
    });
});

//logout
authRoutes.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

// //profile page
// app.get("/profile", isLoggedIn, function(req, res) {
//   var user = req.user;
//   user._id = encrypt(user._id);
//   res.render("profile.hbs", {
//     user: user
//   });
// });

module.exports = authRoutes;
