const mongoose = require('mongoose');
const { Schema } = mongoose;

const addressSchema = new Schema({
    Address: {
        type: String,
        required: true,
    },

});

const Address = mongoose.model('Address', addressSchema);
module.exports = Address;

