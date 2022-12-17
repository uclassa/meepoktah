/*
    Express API for fetching data from the server
*/
const express = require('express');
const apiRouter = express.Router();

const Events = require('../models/Events');

// Get all upcoming events
apiRouter.get('/upcomingEvents', async (req, res) => {
    try {
        const currentDate = new Date();
        const events = await Events.find({ 
            date: { $gte: currentDate.toLocaleDateString('en-US') }
        }).sort({
            date: 'descending'
        })
        return res.status(200).json({
            success: true,
            events: events,
            message: events.length > 0 ? "Successfully returned all upcoming events" : "There are no upcoming events"
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `Failed to return all upcoming events: ${error}`
        })
    }
})

// Get last 6 events
apiRouter.get('/pastEvents', async (req, res) => {
    // TODO: make this potentially faster
    try {
        const n = 6;
        const currentDate = new Date();
        const events = await Events.find({ 
            date: { $lt: currentDate }
        }).sort({
            date: 'descending'
        })
        
        return res.status(200).json({
            success: true,
            events: events.slice(0, n),
            message: `Successfully returned the last ${n} events`
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `Failed to return all upcoming events: ${error}`
        })
    }
})

module.exports = apiRouter;