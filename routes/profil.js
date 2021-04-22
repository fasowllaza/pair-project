const controller = require("../controllers/profil")
const router = require("express").Router()
const authentication = require("../middlewares/authentication") 


router.get("/", authentication, controller.showProfil)

module.exports = router