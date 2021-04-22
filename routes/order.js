const controller = require("../controllers/order")
const router = require("express").Router()

router.get("/", controller.orderForm)
router.post("/", controller.orderFormPost)

module.exports = router