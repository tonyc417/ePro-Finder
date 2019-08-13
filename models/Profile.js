const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    platform: {
        type: String,
        required: true
    },
    games: {
        type: String,
        default: Date.now
    }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);