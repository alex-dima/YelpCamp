# YelpCamp

## 28 - YelpCamp: Basics

### Initial Setup

    * Add landing Page
    * Add Compgrounds Page that lists all campgrounds

    Each Campground Has:
    * Image
    * Name

### Layout and Basic Styling

    * Create our header and footer partials
    * Add in Bootstrap

### Creating New Campgrounds

    * Set new Campground POST route
    * Add in body-parser
    * Setup route to show form
    * Add basic unstyled form

### Style the campgrounds page

    * Add a better header/title
    * Make campgrounds display in a grid

### Style the Navbar and Form

    * Add a navbar to all templates
    * Style the new campground from

### Add Mongoose

    * Install and configure mongoose
    * Setup campground model
    * Use campground model inside of our routes!

### Show Page

    * Review the RESTful routes we've seen so far
    * Add description to our campground model
    * Show db.collection.drop()
    * Add a show route/template

### Refactior Mongoose Code

    * Create a models directory
    * Use module.exports
    * Require everything correctly

### Add Seeds File

    * Add a seeds.js file
    * Run the seeds file every time the server starts

### Add the Comment model!

    * Make our errors go away!
    * Display comments on campground show page

### Comment New/Create
    * Discuss nested routes
    * Add the comment new and create routes
    * Add the new comment form

### Style Show Page
    * Add sidebar to show page
    * Display comments nicely

### Finish Styling Show Page
    * Add public directory
    * Add custom stylesheet

### Add User Model
    * Install all packages needed for auth
    * Define User Model

### Auth Pt. 2 - Register
    * Configure Passport
    * Add register routes
    * Add register template

### Auth Pt. 3 - Login
    * Add login routes
    * Add login template

### Auth Pt. 4 - Logout/Navbar
    * Add logout routes
    * Prevent user from adding a comment if not signed in
    * Add links to navbar
    * Show/hide auth links correctly

### Auth Pt. 5 - Show/Hide Links
    * Show/hide auth links in navbar correctly

### Refactor the Routes
    * Use Express router to reorganiza all the routes

### Users + Comments
    * Associate users and comments
    * Save author's name to a comment automatically

### Users + Campgrounds
    * Prevent an unauthenticated user from creatin a campground
    * Save username+id to newly created campground

### Editing Campgrounds
    * Add Method-Override
    * Add Edit Route for Campgrounds
    * Add Link to Edit Page
    * Add Update Route
    * Fix $set problem.

### Deleting Campgrounds
    * Add Destroy Route
    * Add Delete button

### Authorization Part 1: Campgrounds
    * User can only edit his/her campgrounds
    * User can only delete his/her campgrounds
    * Hide/Show edit and delete buttons

### Editing Comments
    * Add Edit Route for comments
    * Add Edit button
    * Add Update route

### Deleting Comments
    * Add Destroy route
    * Add Delete button

### Authorization Part 2: Comments
    * User can only edit his/her comments
    * User can only delete his/her comments
    * Hide/Show edit and delete buttons
    * Refactor Middleware

### Adding in Flash!
    * Demo working version
    * Install and configure connect-flash
    * Add bootstrap alerts to header

### Make Landing Great Again!

### Make The Price Dynamic

     RESTFUL ROUTES Examples
    name    url         verb    description
    ==============================================
    INDEX   /dogs       GET     Display a list of all dogs
    NEW     /dogs/new   GET     Displays form to make a new dog
    CREATE  /dogs       POST    Add new dog to DB
    SHOW    /dogs/:id   GET     Shows info about one dog
