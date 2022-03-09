const express = require("express")
const router = express.Router()
const seedCtrl = require("../controllers/seedCtrl")

//routes
router.get("/all", seedCtrl.listSeed)
router.get("/one/:name", seedCtrl.getOne)
router.get("/level1", seedCtrl.level1)
router.get("/level2", seedCtrl.level2)
router.get("/level3", seedCtrl.level3)
router.get("/level4", seedCtrl.level4)
router.get("/level5", seedCtrl.level5)
router.get("/level6", seedCtrl.level6)
router.get("/level7", seedCtrl.level7)
router.get("/level8", seedCtrl.level8)

//export
module.exports = router