const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({ 
    firstName: String, 
    lastName: String,
    invoices:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Invoice'
        }
    ]
})

module.exports = mongoose.model('Customer', customerSchema);