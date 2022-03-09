// imports
const mongoose = require("mongoose")

//schema
const lessonSchema = mongoose.Schema({
  level:{
    type: String
  },
  username:{
    type: String
  },
  character:{
    type: String
  },
	drawings:{
		type: [String]
	}
})
//model
const Lesson = mongoose.model("Lesson", lessonSchema)

//export
module.exports = Lesson