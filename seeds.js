const mongoose = require("mongoose");
const Campground = require("./models/campground");
const Comment = require("./models/comment");
// const data = [
//     {
//         name: "Cloud's Rest",
//         image: "https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
//         description: "The goddesses? Alex, the goddesses .... Let me just say this about the goddesses: I don't believe the term is good enough ... is good enough ... but when you're bound by these terrestrial descriptions, you must use the best choice available, right? Yeah. I did. Because he's nothing shy of that. And it is his job to go out there and embarrass people. Embarrass them. Not just beat them, but embarrass them in the process. They have zero. They have that night, and I will forget about them as the last image of them exits my beautiful home. And they will get out there and they will sell me, and they will lose.  It's being directed and written by a genius name David Ward who - oh, I don't know - won the Academy Award at 23 for writing The Sting. And it was his pen and his vision that created the classic that we know today as Major League."
//     },
//     {
//         name: "Skyline's Valley",
//         image: "https://images.unsplash.com/photo-1515408320194-59643816c5b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
//         description: "Um ... but I'm excited to get back ... to work. Um ... and not to completely discount what you just talked about ... It's just that if I bring up these ... these turds ... these little losers ... there's no reason to then bring them back into the fold, because I have real fame, and they have nothing. In fact, a lot of people think the movie's called 'Wild Thing', as they should. 'You have the right to kill me, but you do not have the right to judge me.' Boom. That's the whole movie. That's life .... That's life. There's nobility in that. There's focus. It's genuine. It's crystal and it's pure and it's available to everybody. He's as radical as you'd think he'd might be. If ... I'm not just my dad, I'm ... you know ... petting up the river to kill another part of me, which is 'courage'."
//     },
//     {
//         name: "Desert's Stone",
//         image: "https://images.unsplash.com/photo-1455763916899-e8b50eca9967?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
//         description: "Yeah, why not? 'Cause it's just pure ... pure and complete gnarlyisms. Yeah. I did. Because he's nothing shy of that. And it is his job to go out there and embarrass people. Embarrass them. Not just beat them, but embarrass them in the process."
//     }
// ];
function seedDB() {
    //Remove all campgrounds
    Campground.deleteMany({}, err => {
        if (err) console.log(err);
        console.log("Removed All Campgrounds!");

        // data.forEach(seed => {
        //     Campground.create(seed, (err, campground) => {
        //         if(err)
        //             console.log(err);
        //         else
        //             campground.save();
        //     });
        // });

        
        // Comment.deleteMany({}, err => {
        //     if (err) console.log(err);
        //     else
        //     {
        //         //add a few campgrounds
        //         data.forEach(seed => {
        //             Campground.create(seed, (err, campground) => {
        //                 if (err) console.log(err);
        //                 else {
        //                     console.log("Added a campground");
        //                     // Create a comment
        //                     Comment.create(
        //                         {
        //                             text: "This place is great, but i wish there was internet!",
        //                             author: "Homer"
        //                         },
        //                         (err, comment) => {
        //                             if (err) console.log(err);
        //                             else {
        //                                 campground.comments.push(comment);
        //                                 campground.save();
        //                                 console.log("Created new comment");
        //                             }
        //                         }
        //                     );
        //                 }
        //             });
        //         });
        //     }
        // });
    });
}

module.exports = seedDB;
