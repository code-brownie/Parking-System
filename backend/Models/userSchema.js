const mongoose = require('mongoose');
const { Schema } = mongoose;

// Custom validator function for Indian vehicle registration numbers
function validateVehicleNumber(vehicleNumber) {
    // Regular expression pattern for Indian vehicle registration numbers
    const pattern = /^[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}$/;
    return pattern.test(vehicleNumber);
}

const userSchema = new Schema({
    vehicleNumber: {
        type: String,
        required: true,
        validate: {
            validator: validateVehicleNumber,
            message: 'Invalid Indian vehicle number format',
        },
        unique: true,

    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
