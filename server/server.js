const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose')
const morgan = require('morgan');
require('dotenv').config();

const MONGO_URI = process.env.REACT_APP_MONGO_URI;

const app = express();
const PORT = process.env.PORT  || 8080;

const eventsRouter = require('./routes/eventsRouter.js');

mongoose.connect(MONGO_URI || 'mongodb://localhost/meepoktah', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log("Mongoose is connected");
})

app.set('trust proxy', true);
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.urlencoded({ extended: false }));
  
// HTTP request logger. Prints requests to console
app.use(morgan('tiny'));
app.use('/api', eventsRouter);

app.use(express.static(path.join(__dirname, "..", "dist")));

app.get("*", (_, response) => {
  response.sendFile(path.join(__dirname, "..", "dist", "index.html"));
});

app.listen(PORT, console.log(`Server is starting at port ${PORT}`));