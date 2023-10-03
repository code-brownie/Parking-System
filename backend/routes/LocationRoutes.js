const express = require("express");
const router = express.Router();
const request = require('request');
const bingapiKey = 'AuDlm3xRjzql6cXPaqm2xPZBl2hF3siqfbvFFFzhxHR5P0evPPkeXzuo7V3ynvXz';
// Routes for location fetching and displaying the nearby locations
router.get('/location', (req, res) => {
    // Replace this with the address or location you want to get directions to
    const location = req.query.location;
    console.log(req.body);

    // Construct the Bing Maps API URL
    const apiUrl = `https://dev.virtualearth.net/REST/v1/Locations?q=${encodeURIComponent(location)}&key=${bingapiKey}`;

    // Make an HTTP request to the Bing Maps API
    request(apiUrl, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            const data = JSON.parse(body);
            if (data.resourceSets.length > 0 && data.resourceSets[0].resources.length > 0) {
                const coordinates = data.resourceSets[0].resources[0].point.coordinates;
                const lat = coordinates[0];
                const lon = coordinates[1];
                console.log(lat, lon)
                // Generate the Bing Maps directions URL
                const directionsUrl = `https://www.bing.com/maps?cp=${lat}~${lon}&lvl=15&dir=0&sty=r&sp=Point.${lat}_${lon}_${location}`;

                // Redirect the user to Bing Maps
                console.log({ lat, lon });
                res.json({
                    url: directionsUrl,
                    lat: lat,
                    lon: lon
                });
            } else {
                res.send('Location not found.');
            }
        } else {
            res.send('Error fetching data from Bing Maps API.');
        }
    });
});

module.exports = router;
