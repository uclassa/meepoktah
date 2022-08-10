const mongoose = require('mongoose');
const marked = require('marked');
const slugify = require('slugify');

// Schema
const Schema = mongoose.Schema;
const SotongGuideSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    markdown: {
        type: String,
        required: true
    },
    // lastEdited: {
    //     type: date,
    //     default: Date.now,
    //     required: true
    // },
    // slug: {
    //     type: String,
    //     required: true,
    //     unique: true
    // }
})

// Model
const SotongGuideModel = mongoose.model('SotongGuideModel', SotongGuideSchema);

module.exports = SotongGuideModel