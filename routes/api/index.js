const router = require("express").Router();
const apiRoute = require("./apiRoutes");

// api routes
router.use("/api/adoptionPets", apiRoute);

module.exports = router;
