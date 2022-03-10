// imports
const mongoose = require("mongoose")

//schema
const userSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	lastname: {
		type: String,
		default: ""
	},
	username: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
  avatar:{
    type: String,
  },
  level:{
		type: Number,
		default: 0
	},
	achievements:{
		type: [Object],
    default: [{character: "0", data: "user created"}]
	}
})
//model
const User = mongoose.model("User", userSchema)

//export
module.exports = User