const pet = require("../models/newpet");
const user = require("../models/newuser");

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
  createUser: function(req, res) {
    user.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findUser: function(req, res) {
    user.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  verifyInfo: function(req, res) {
    user.findOne({ 'email': req.body.email }, function (err, user) {
    if (req.body.password === user.password) {
      console.log("IT WENT THROUGH");
      res.redirect((process.env.PORT  || "http://localhost:3000/"));
    }
  })
},
};
