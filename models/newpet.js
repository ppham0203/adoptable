const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petSchema = new Schema({
  Pet: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const pet = mongoose.model("pet", petSchema);

module.exports = pet;
