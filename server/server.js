const path = require('path');
const express = require('express');
const mongoose = require('mongoose')
const morgan = require('morgan');
require('dotenv').config();

const MONGO_URI = process.env.REACT_APP_MONGO_URI;

const app = express();
const PORT = process.env.PORT  || 8080;

const eventsController = require('./routes/eventsController.js');

mongoose.connect(MONGO_URI || 'mongodb://localhost/meepoktah', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
    console.log("Mongoose is connected");
})

app.set('trust proxy', true);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
  
// HTTP request logger. Prints requests to console
app.use(morgan('tiny'));
app.use('/api', eventsController);

// Serve everything in the static folder as static files
app.use(express.static(path.join(__dirname, "..", "dist")));

// Redirect everything else to frontend
app.get("*", (_, response) => {
  response.sendFile(path.join(__dirname, "..", "dist", "index.html"));
});


app.listen(PORT, console.log(`Server is starting at port ${PORT}`));