const express = require('express');
const controller = require("../controllers/login")
const loginRoutes = express.Router()


loginRoutes.get('/', controller.login)

module.exports = loginRoutes