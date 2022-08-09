/*
    Built with guidance from the following tutorial playlist: https://www.youtube.com/playlist?list=PLurIMwd6GdCj_VlnKVceR66Sxfcb37VU8
*/


const express = require('express');
const mongoose = require('mongoose')
const morgan = require('morgan');
require('dotenv').config();

const MONGO_URI = process.env.REACT_APP_MONGO_URI;

const app = express();
const PORT = process.env.port || 8080;

const eventsController = require('./routes/eventsController.js');

mongoose.connect(MONGO_URI || 'mongodb://localhost/meepoktah', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
    console.log("Mongoose is connected");
})

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// HTTP request logger. Prints requests to console
app.use(morgan('tiny'));
app.use('/api', eventsController);

app.listen(PORT, console.log(`Server is starting at port ${PORT}`));