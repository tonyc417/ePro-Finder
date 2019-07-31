const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/epro";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, console.log("Mongo Connected"));

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;

app.listen(port, console.log("Server started on " + port));

