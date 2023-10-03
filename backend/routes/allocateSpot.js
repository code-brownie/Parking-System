
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const qr = require('qrcode');
const axios = require('axios')

let addr;
require('dotenv').config({ path: "../.env" });




const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});


var transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "6ccd42fbcbf863",
    pass: "8e7849d2c576cc"
  }
});

router.post('/getPlace', async (req, res) => {
  try {
    // console.log(req.body)
    const { Address } = req.body;
    addr = Address
    console.log("The address is ", addr)
    res.status(200).json({ message: 'Address sent successfully' });
  } catch (error) {
    console.log(error.message)
  }
})



router.post('/allocate-slot', async (req, res) => {
  try {
    const { vehicleNumber, email } = req.body;
    console.log(vehicleNumber)
    console.log(email)




    const qrCodeData = `${vehicleNumber}`;
    const qrCodeImage = await qr.toDataURL(qrCodeData);


    const mailOptions = {
      from: 'team.morph.group@gmail.com',
      to: email,
      subject: `ParkNxt spot allocation`,
      html: `<h3>Your parking spot has been allocated. Show the QR code attached with the mail to the Admin present on  parking site.</h3><br><br><h3>Loction to go: ${addr}</h3><h1><a href="https://www.mappls.com/place-parking-near-me?@zdata=MTMuMzI2Mjg0Kzc3LjEyODI2NSsxMSsxMy40MDgyODYsNzcuMDI1OTU1OzEzLjIzNzU3MCw3Ny4zNjc5MDUrcGFya2luZytlbCssK2luZA==ed">Click here</a> to go the desired location</h1>`,
      attachments: [
        {
          filename: 'token.png',
          content: qrCodeImage.split(';base64,').pop(),
          encoding: 'base64',
        },
      ],
    };
    const mailOptions2 = {
      from: 'team.morph.group@gmail.com',
      to: email,
      subject: `${vehicleNumber}`,
      text: `car with car number ${vehicleNumber} is arriving soon for location: ${addr}`,
      attachments: [
        {
          filename: 'car-number.png',
          content: qrCodeImage.split(';base64,').pop(),
          encoding: 'base64',
        },
      ],
    };

    transporter.sendMail(mailOptions, (error, info) => {

      try {
        console.log('Email sent:', info.response);
        res.status(200).json({ message: 'Spot allocated successfully' });
      } catch (err) {
        console.error('Error sending email:', error);
        console.error(err.essage)
        res.status(500).json({ error: 'Failed to send email' });
      }
    });
    transport.sendMail(mailOptions2, (error, info) => {

      try {
        console.log('Email sent:', info.response);
        res.status(200).json({ message: 'Spot allocated successfully' });
      } catch (err) {
        console.error('Error sending email:', error);
        console.error(err.message)
        res.status(500).json({ error: 'Failed to send email' });
      }
    });
  } catch (error) {
    console.error('Error allocating parking spot:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;