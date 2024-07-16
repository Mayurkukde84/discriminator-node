const express = require('express')
const router = express.Router()
const agenController = require('../controller/agentController')
router.route('/').post(agenController.agenController)

module.exports = router