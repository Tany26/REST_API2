const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const l4 = new Schema({
    post: { type: String, required: true },
    link: { type: String, required: true },
    Date: Date,
}, { timestamps: true });

module.exports = mongoose.model('l4', l4);