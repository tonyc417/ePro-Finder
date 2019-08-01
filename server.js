const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const users = require('./routes/api/users');

mongoose
 .connect(process.env.MONGODB_URI || "mongodb://localhost/epro", {
   useNewUrlParser: true
 })
 .then(() => console.log("Database Connected"));
 
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client/build')));
app.use('/api/users', users);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;

app.listen(port, console.log("Server started on " + port));

