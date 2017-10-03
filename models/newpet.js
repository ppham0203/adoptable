const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petSchema = new Schema({
  image: { type: String, },
  link: { type: String, unique: true },
  name: { type: String, required: true },
  gender: { type: String, required: true},
  age: { type: String, },
  weight: { type: String, },
  breed: { type: String, required: true },

});

const pet = mongoose.model("dogs", petSchema);

module.exports = pet;
