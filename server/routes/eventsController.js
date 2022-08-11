/*
    Express API for fetching data from the server
*/
const express = require('express');
const router = express.Router();

// Data models
const UpcomingEventsModel = require('../models/UpcomingEvent.js');
const PastEventsModel = require('../models/PastEvent.js');

// "/" defaults to "/api". Specify the URL to search MongoDB
router.get('/UpcomingEvents', async (req, res) => {
    await UpcomingEventsModel.find({ })
    .then((data) => {
        res.json(data)
    })
    .catch((error) => {
        console.log(error)
    })
});

router.get('/PastEvents', async (req, res) => {
    await PastEventsModel.find({ })
    .then((data) => {
        res.json(data)
    })
    .catch((error) => {
        console.log(error)
    })
});

module.exports = router;