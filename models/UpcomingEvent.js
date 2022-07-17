const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const EventSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    image: { // GOOGLE PHOTOS as image host
        type: String
    }
})

// Model
const Events = mongoose.model('UpcomingEvents', EventSchema);
module.exports = Events;