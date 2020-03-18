const express = require("express");
const router = express.Router();
const Campground = require("../models/campground");
const middleware = require("../middleware");
//INDEX
router.get("/", (req, res) => {
    //Get all campground from DB
    Campground.find({}, (err, allCampgrounds) => {
        if (err) console.log(err);
        else res.render("campgrounds/index", { campgrounds: allCampgrounds});
    });
});

//CREATE
router.post("/", middleware.isLoggedIn,(req, res) => {
    //Create a new campground and save to DB
    Campground.create(
        {
            name: req.body.name,
            price: req.body.price,
            image: req.body.image,
            description: req.body.description,
            author: {
                id: req.user._id,
                username: req.user.username
            }
        },
        (err, newCampground) => {
            if (err) console.log(err);
            //redirect back to campgrounds page
            else 
            {
                console.log(newCampground);
                res.redirect("/campgrounds");
            }
        }
    );
});

//NEW
router.get("/new", middleware.isLoggedIn,(req, res) => {
    res.render("campgrounds/new");
});

//SHOW
router.get("/:id", (req, res) => {
    //Find the campground with provided ID
    Campground.findById(req.params.id).populate("comments").exec((err, foundCampground) => {
        if (err) console.log(err);
        //Render show template with that campground
        else res.render("campgrounds/show", { camp: foundCampground });
    });
});

//EDIT
router.get("/:id/edit", middleware.checkCampgroundAuthorization,(req, res) => {
    Campground.findById(req.params.id, (err, foundCampground) => {
        res.render("campgrounds/edit",{camp: foundCampground});
    });
});

//UPDATE

router.put("/:id", middleware.checkCampgroundAuthorization, (req, res) => {
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, (err, updatedCampground) => {
        if(err)
            res.redirect("/campgrounds");
        else
            res.redirect(`/campgrounds/${req.params.id}`);
        
    });
});

//DESTROY
router.delete("/:id", middleware.checkCampgroundAuthorization, (req, res) => {
    Campground.findById(req.params.id, (err, campground) => {
        if(err)
            res.redirect("/campgrounds");
        else
        {
            campground.remove();
            res.redirect("/campgrounds");
        }
    });
});

module.exports = router;