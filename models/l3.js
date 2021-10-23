const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const l3 = new Schema({
    post: { type: String, required: true },
    link: { type: String, required: true },
    Date: Date,
}, { timestamps: true });

module.exports = mongoose.model('l3', l3);