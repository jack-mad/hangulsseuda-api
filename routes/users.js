//imports
const express = require("express")
const router = express.Router()
const authorization = require("./../middlewares/authorization")
const usersCtrl = require("./../controllers/usersCtrl")

//routes
router.post("/signup", usersCtrl.signup)
router.post("/signin", usersCtrl.signin)
router.get("/verify", authorization, usersCtrl.verify)

router.post("/lesson/add", usersCtrl.addLesson)
//router.get("/lesson/:name", usersCtrl.editLesson)
//router.post("/lesson/:name", usersCtrl.updateLesson)
//router.post("/lesson/delete/:name", usersCtrl.deleteLesson)

//export
module.exports = router