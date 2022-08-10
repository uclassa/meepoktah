const mongoose = require('mongoose');

// Schema
const Schema = mongoose.Schema;
const SotongGuideHeadersSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    urlTag: {
        type: String,
        required: true
    }
})

// Model
const SotongGuideHeader = mongoose.model('SotongGuideHeader', SotongGuideHeadersSchema);
module.exports = SotongGuideHeader