const express = require("express");
const authRoutes = express.Router();

const passport = require("passport");

const User = require("../models/user-model");

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

authRoutes.post("/signup", (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  if (email === "" || password === "") {
    res.render("auth/Signup", { message: "Indicate email and password" });
    return;
  }

  User.findOne({ email })
    .then(user => {
      if (user !== null) {
        res.render("auth/Signup", { message: "The email already exists" });
        return;
      }

      const salt = bcrypt.genSaltSync(bcryptSalt);
      const hashPass = bcrypt.hashSync(password, salt);

      const newUser = new User({
        name,
        email,
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
