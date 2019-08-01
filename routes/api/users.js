const express = require('express');
const router = express.Router();

const User = require('../../models/User');


//Route for getting all users information
router.get('/', (req,res) => {
    User.find()
    .sort({ date: -1}) // sorts users by join date
    .then(users => res.json(users));
});

//Route for posting users info to the database
router.post('/', (req,res) => {
    const newUser = new User({
        name: req.body.name,
        password: req.body.password
    });

    newUser.save().then(user => res.json(user));
})

//Route for deleting users

module.exports = router;