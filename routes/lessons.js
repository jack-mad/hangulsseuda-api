const express = require("express")
const router = express.Router()
const lessonsCtrl = require("./../controllers/lessonsCtrl")

//routes
router.post("/add", lessonsCtrl.add)
router.get("/fetch:/:id", lessonsCtrl.fetch)
router.post("/update/:id", lessonsCtrl.update)
router.post("/delete/:id", lessonsCtrl.delete)

//export
module.exports = router