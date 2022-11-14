const Invoice = require('../models/Invoice');
const Customer = require('../models/Customer');

const InvoiceController = {
    create: async (req, res) => {
        const data = req.body
        
        const customer = await Customer.findById(data.customer)

        if(!customer) {
            res.status(404).send('Customer not found')
        }

        data.customer = customer
        const invoice = new Invoice(data)
        
        const newInvoice = await invoice.save()

        res.send(newInvoice)
    },
    update: async (req, res) => {
        const newInvoice = req.body
        Invoice.findByIdAndUpdate(req.params.id, newInvoice)
            .then(data => res.send(data))
    },
    delete: async (req, res) => {
        const deleteInvoice = await Invoice.findByIdAndDelete(req.params.id)
        res.send(deleteInvoice)
    },
    getAll: async (req, res) => {
        const invoiceList = await Invoice.find()
        res.send(invoiceList)
    },
    getOne: async (req, res) => {
        const invoice = await Invoice.findById(req.params.id)
        res.send(invoice)
    }
}

module.exports = InvoiceController