const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const PastEventSchema = new Schema({
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
const PastEvent = mongoose.model('PastEvents', PastEventSchema);
module.exports = PastEvent;