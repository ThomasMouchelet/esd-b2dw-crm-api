const express = require('express')
const CustomerController = require('../controllers/customer.controller')
const router = express.Router()

router.get('/customers', CustomerController.getAll)
router.get('/customers/:id', CustomerController.getOne)
router.post('/customers', CustomerController.create)
router.put('/customers/:id', CustomerController.update)
router.delete('/customers/:id', CustomerController.delete)

module.exports = router