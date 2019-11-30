const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const userSchema = new mongoose.Schema({
    name: String
    , gender: String
    , email: String
    , password: String
    , isAdmin: Boolean

});

userSchema.methods.genToken = function () {
    const token = jwt.sign({ _id: this._id, email: this.email, isAdmin: this.isAdmin, name: this.name }, 'meanstack');
    return token;
}
const User = mongoose.model('user', userSchema);

module.exports = User;