const router = require("express").Router();
const postRoute = require("./apiRoutes");

// Book routes
router.use("/api/adoptionPets", postRoute);

module.exports = router;
