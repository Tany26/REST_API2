const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const login = new Schema({
    ID: { type: String, required: true },
    paasword: { type: String, required: true },

}, { timestamps: true });

module.exports = mongoose.model('login', login);