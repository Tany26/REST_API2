const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const l5 = new Schema({
    Post: String,
    link: String,
    Date: Date,
}, { timestamps: true });

module.exports = mongoose.model('l5', l5);