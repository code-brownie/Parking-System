const express = require('express');
const cors = require('cors')
const app = express();
const port = 5000;
let Addr;
const addressSchema = require("./Models/UserAddress");
require('dotenv').config({ path: "../.env" })

app.use(cors())
app.use(express.json());
const connectDB = require("./DB");
connectDB();

app.use('/', require('./routes/LocationRoutes'))
app.use('/', require('./routes/userdata'))
app.use('/', require('./routes/allocateSpot'))

app.post('/getAddress', async (req, res) => {
    try {
       
        const { Address } = req.body;
        // Use the create method to create a new document
        await addressSchema.create({ Address });

        res.status(201).json({ message: 'Address saved successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while saving the address' });
    }
});

// app.get('/send-data', (req, res) => {
//     // Your data to be sent
//     const data = { message: Addr };

//     // Send the data as a JSON response
//     res.json(data);
//   });

// Route to get nearby locations
app.post("/nearby", async (req, res) => {
    try {
        const { apiUrl } = req.body;
        // console.log(apiUrl);
        const bearerToken = req.headers.authorization;

        const response = await fetch(apiUrl, {
            headers: {
                "Authorization": bearerToken,
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        // console.log(data);
        res.json(data);
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
});




module.exports = Addr;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
