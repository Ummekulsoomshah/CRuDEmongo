const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/user');
const userSchema = mongoose.Schema({
    username: String,
    image: String,
    email: String,
    password: String,
})
module.exports = mongoose.model('User', userSchema);