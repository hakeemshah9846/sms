const mongoose = require('mongoose');

const users = new mongoose.Schema({
    firstName : String,
    lastName : String,
    email : String,
    phone : String,
    gender : String,
    password : String,
    user_type : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user_types",
    },
    password_token : String,
}, {
    timestamps : true,
});

module.exports = mongoose.model("users", users);