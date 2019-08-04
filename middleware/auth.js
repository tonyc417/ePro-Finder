const config = require('config');
const jwt = require('jsonwebtoken');

function auth(req, res, next) {
    const token = req.header('x-auth-token');

    //Check token
    if (!token) 
       return res.status(401).json({ msg: 'You are not authorized my friend..' });
       
    try {
        //verifies 
        const decoded = jwt.verify(token, config.get('jwtSecret'));
        // add user from payload
        req.user = decoded;
        next();
    } catch (e) {
        res.status(400).json({ msg: 'You are not valid' });
    }
}

module.exports = auth;