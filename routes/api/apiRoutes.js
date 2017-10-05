const axios = require("axios");
const router = require("express").Router();
const postController = require("../../controllers/postController");
// const pet = require("./../../models/newpet.js");
// const submitpet = require("./../../models/petsubmission.js");
// Matches with "/api/books"
router.route("/")
  .get(postController.findAll)
  .post(postController.create);


// // This will get the articles we scraped from the mongoDB
// router.get("/results", function(req, res) {
//   // Grab every doc in the Articles array
//   pet.find({}, function(error, scrapedPets) {
//     // Log any errors
//     if (error) {
//       console.log(error);
//     }
//     // Or send the doc to the browser as a json object
//     else {
//       submitpet.find({}, function(error, submittedPets) {
//         // Log any errors
//         if (error) {
//           console.log(error);
//         }
//         // Or send the doc to the browser as a json object
//         else {
        
//           var spreadresults = [...scrapedPets, ...submittedPets]
//           console.log(submittedPets);
//           res.send(spreadresults);
//         }
//       });
//     }
//   });

// });




    



  // leave at end of routes.
router
  .route("/:id")
  .get(postController.findById)

router
  .route("/signup")
  .post(postController.createUser);
  



module.exports = router;


