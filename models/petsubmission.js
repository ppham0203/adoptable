const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const submitSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  pet_name: { type: String, required: true },
  gender: { type: String, required: true},
  age: { type: String, },
  weight: { type: String, },
  breed: { type: String, required: true },

});

const submitPet = mongoose.model("loginPets", submitSchema);

module.exports = submitPet;
