const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const invoiceSchema = new Schema({ 
    amount: Number, 
    createdAt: {
        type: Date,
        default: Date.now()
    },
    status: {
        type: String,
    },
    customer: {
        type: Schema.Types.ObjectId,
        ref: 'Customer'
    }
})

module.exports = mongoose.model('Invoice', invoiceSchema);