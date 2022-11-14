const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({ 
    firstName: String, 
    lastName: String
})

module.exports = mongoose.model('Customer', customerSchema);