/*
    Express API for fetching data from the server
*/
const express = require('express');
const router = express.Router();

// Data models
const SotongGuideModel = require('../../models/SotongGuideModel');
const SotongGuideHeaders = require('../../models/SotongGuideHeadersModel');

// "/" defaults to "/api". Specify the URL to search MongoDB
router.get('/SotongGuideHeaders', (req, res) => {
    SotongGuideHeaders.find({ })
    .then((data) => {
        res.json(data)
    })
    .catch((error) => {
        console.log(error)
    })
});

// Will return an array of all sotong guides
router.get('/SotongGuides', (req, res) => {
    SotongGuideModel.find({ })
    .then((data) => {
        res.json(data)
    })
    .catch((error) => {
        console.log(error)
    })
});

/*
    The following 6 functions are routes to fetch the respective sotong guides.
    ! title of sotong guide must match suffix in URL
*/
router.get('/SotongGuides/visa', (req, res) => {
    SotongGuideModel.findOne({ title: "visa" })
    .then((data) => {
        res.json(data)
    })
    .catch((error) => {
        console.log(error)
    })
});

router.get('/SotongGuides/predeparture', (req, res) => {
    SotongGuideModel.findOne({ title: "predeparture" })
    .then((data) => {
        res.json(data)
    })
    .catch((error) => {
        console.log(error)
    })
});

router.get('/SotongGuides/general', (req, res) => {
    SotongGuideModel.findOne({ title: "general" })
    .then((data) => {
        res.json(data)
    })
    .catch((error) => {
        console.log(error)
    })
});

router.get('/SotongGuides/oncampus', (req, res) => {
    SotongGuideModel.findOne({ title: "oncampus" })
    .then((data) => {
        res.json(data)
    })
    .catch((error) => {
        console.log(error)
    })
});

router.get('/SotongGuides/settling', (req, res) => {
    SotongGuideModel.findOne({ title: "settling" })
    .then((data) => {
        console.log(data)
        res.json(data)
    })
    .catch((error) => {
        console.log(error)
    })
});

router.get('/SotongGuides/academics', (req, res) => {
    SotongGuideModel.findOne({ title: "academics" })
    .then((data) => {
        console.log(data)
        res.json(data)
    })
    .catch((error) => {
        console.log(error)
    })
});


module.exports = router;