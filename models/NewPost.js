const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NewPost = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});