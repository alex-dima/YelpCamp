const Campground = require("../models/campground");
const Comment = require("../models/comment");
//All hte middleware goes here
var middlewareObj = {};
middlewareObj.checkCampgroundAuthorization = function(req, res, next) {
    if(req.isAuthenticated()){
        Campground.findById(req.params.id, (err, foundCampground) => {
            if(err)
            {
                req.flash("error", "Campground not found.");
                res.redirect("back");
            }
            else if (!foundCampground) {
                req.flash("error", "Item not found.");
                return res.redirect("back");
            }
            else if (foundCampground.author.id.equals(req.user._id))
                next();
            else
            {
                req.flash("error", "You don't have permission to do that.");
                res.redirect("back");
            }
        });
    }
    else
    {
        req.flash("error", "You need to be logged in to do that.");
        res.redirect("back");
    }
};
middlewareObj.checkCommentAuthorization = function(req, res, next) {
    if(req.isAuthenticated()){
        Comment.findById(req.params.comment_id, (err, foundComment) => {
            if(err)
            {
                req.flash("error", "Campground not found.");
                res.redirect("back");
            }
            else if (!foundComment) {
                req.flash("error", "Item not found.");
                return res.redirect("back");
            }
            else if (foundComment.author.id.equals(req.user._id))
                next();
            else
            {
                req.flash("error", "You don't have permission to do that.");
                res.redirect("back");
            }
        });
    }
    else
    {
        req.flash("error", "You need to be logged in to do that.");
        res.redirect("back");
    }
};

middlewareObj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error", "You need to be logged in to do that.");
    res.redirect("/login");
};

module.exports = middlewareObj;