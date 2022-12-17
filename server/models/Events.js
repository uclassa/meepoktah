const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const Event = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
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
    image: {
        type: String
    }
})

// Model
const Events = mongoose.model('Events', Event);
module.exports = Events;