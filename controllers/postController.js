const pet = require("../models/newpet");
const submitPet = require("../models/petsubmission");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    pet.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    // console.log(req.params.id);    
    pet.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
         
  },
  create: function(req, res) {
    pet.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};
