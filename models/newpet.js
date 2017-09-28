const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petSchema = new Schema({
  image: { type: String, required: true },
  link: { type: String, required: true },
  name: { type: String, required: true },
  gender: { type: String, required: true},
  age: { type: String, required: true },
  weight: { type: String, required: true },
  breed: { type: String, required: true },

});

const pet = mongoose.model("pet", petSchema);

module.exports = pet;
