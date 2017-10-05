const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petSchema = new Schema({
  name: { type: String, },
  email: { type: String, unique: true },
  password: { type: String, required: true },

});

const user = mongoose.model("user", petSchema);

module.exports = user;
