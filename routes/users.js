//imports
const express = require("express")
const router = express.Router()
const authorization = require("./../middlewares/authorization")
const usersCtrl = require("./../controllers/usersCtrl")

//routes
router.post("/signup", usersCtrl.signup)
router.post("/signin", usersCtrl.signin)
router.get("/verify", authorization, usersCtrl.verify)

//export
module.exports = router