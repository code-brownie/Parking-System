const express = require('express');
const router = express.Router();
const userSchema = require('../Models/userSchema'); // Adjust the path as needed
router.post('/slot-booking', async (req, res) => {
    try {
        // Extract the form data from the request body
        const { vehicleNumber, email } = req.body;

        // Create a new User document using the Mongoose model
        const newUser = new userSchema({
            vehicleNumber,
            email,
        });

        // Save the user data to the database
        await newUser.save();

        // Respond with a success message
        res.status(201).json({ message: 'User data saved successfully' });
    } catch (error) {
        // Handle any errors that occur during the process
        console.error(error);
        res.status(500).json({ error: 'An error occurred while saving the data' });
    }
});

module.exports = router;
