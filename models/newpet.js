const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petSchema = new Schema({
  image: { type: String, },
  link: { type: String, unique: false },
  pet_name: { type: String, },
  gender: { type: String, required: true },
  age: { type: String, },
  weight: { type: String, },
  breed: { type: String, required: true },
  first_name: { type: String },
  last_name: { type: String },
  email: { type: String },
  phone: { type: String },

});

const pet = mongoose.model("dogs", petSchema);

module.exports = pet;
