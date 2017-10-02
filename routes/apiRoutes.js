const axios = require("axios");
const router = require("express").Router();
const postController = require("../controllers/postController");

// Matches with "/api/books"
router.route("/")
  .get(postController.findAll)
  .post(postController.create);

// Matches with "/api/books/:id"
router
  .route("/pets/:id")
  .get(postController.findById)

module.exports = router;
