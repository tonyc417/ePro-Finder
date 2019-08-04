const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

const User = require('../../models/User');

//Route for authenticating user
router.post('/', (req,res) => {
    const { email, password } = req.body;
    
    //validate
    if(!email || !password) {
        return res.status(400).json({ msg: 'Please complete all fields' });
    }

    //check if user exists
    User.findOne({ email })
    .then(user => {
        if(!user) return res.status(400).json({ msg: 'User doesnt exist '});

        //check password
        bcrypt.compare(password, user.password).then(isMatch => {
            if(!isMatch) return res.status(400).json({ msg: 'Invalid password'});

            
            jwt.sign(
                { id: user.id },
                config.get('jwtSecret'),
                { expiresIn: 3600 },
                (err, token) => {
                    if (err) throw err;
                    res.json({
                        token,
                        user: {
                            id: user.id,
                            name: user.name,
                            email: user.email
                        }
                    });
                }
            )
        })
    })
});

module.exports = router;