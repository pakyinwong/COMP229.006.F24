const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String
});

module.exports = mongoose.model('Contact', ContactSchema);