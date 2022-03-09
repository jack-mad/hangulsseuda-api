// imports
const mongoose = require("mongoose")

//schema
const seedSchema = mongoose.Schema({
  name: String,
  character: String,
  soundsLike: String,
  imageUrl: String,
  audioUrl: String,
  level: Number
})
//model
const Seed = mongoose.model("Seed", seedSchema)

//export
module.exports = Seed