const axios = require("axios");
const router = require("express").Router();
const postController = require("../../controllers/postController");
const pet = require("./../../models/newpet.js");

router.route("/")
  .get(postController.findAll)
  .post(postController.create);

// This will get the pet data we scraped from the mongoDB
router.get("/results", function (req, res) {
  // Grab every doc in the Articles array
  pet.find({}, function (error, doc) {
    // Log any errors
    if (error) {
      console.log(error);
    }
    // Or send the doc to the browser as a json object
    else {
      res.json(doc);
    }
  });
});

// leave at end of routes.
router
  .route("/:id")
  .get(postController.findById)

router
  .route("/signup")
  .post(postController.createUser);

router 
  .route("/verifyUser")
  .post(postController.verifyInfo)



module.exports = router;


