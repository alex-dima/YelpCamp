const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/user");

//Root route
router.get("/", (req, res) => {
    res.render("landing");
});

//register form route
router.get("/register", (req, res) => {
    res.render("register");
});

//sign up logic route
router.post("/register", (req, res) => {
    User.register(new User({username: req.body.username}), req.body.password, (err, user) => {
        if(err)
        {
            console.log(err);
            return res.render("register", {"error": err.message});
        }
        passport.authenticate("local")(req, res, () => {
            req.flash("success", "Welcome to YelpCamp " + user.username);
            res.redirect("/campgrounds");
        });
            
    });
});

//login form route
router.get("/login", (req, res) => {
    res.render("login");
});

//login logic route
router.post("/login", passport.authenticate("local", {
    successRedirect: "/campgrounds",
    failureRedirect: "/login"
}), (req, res) => {});

//logout route
router.get("/logout", (req, res) => {
    req.logout();
    req.flash("success", "Logged you out");
    res.redirect("/campgrounds");
});

module.exports = router;