
const mongoose=require('mongoose');

let UserSchema=mongoose.Schema(
{
    name: String,
    email: String,
    password: String,
}
);

module.exports = mongoose.model('users',UserSchema)