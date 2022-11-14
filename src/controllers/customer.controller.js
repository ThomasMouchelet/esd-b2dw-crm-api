const Customer = require('../models/Customer');

const CustomerController = {
    create: async (req, res) => {
        const data = req.body
        const customer = new Customer(data)
        customer.save().then(dataDB => {
            res.send(dataDB)
        })
    },
    update: async (req, res) => {
        const newCustomer = req.body
        const customer = await Customer.findByIdAndUpdate(req.params.id, newCustomer)
        res.send(customer)
    },
    delete: async (req, res) => {
        const deleteCustomer = await Customer.findByIdAndDelete(req.params.id)
        res.send(deleteCustomer)
    },
    getAll: async (req, res) => {
        const customersList = await Customer.find()
        res.send(customersList)
    },
    getOne: async (req, res) => {
        const customer = await Customer.findById(req.params.id)
        res.send(customer)
    }
}

module.exports = CustomerController