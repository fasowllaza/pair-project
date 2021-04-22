const controller = require("../controllers/deleteUser")

const express = require('express');
const deleteRoutes = express.Router()

deleteRoutes.get('/', controller.getDelete);

module.exports = deleteRoutes;