const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    completed: {
        type : Boolean,
        required : true,
        default : false
    },
}, {timestamps: true})

const userModel = mongoose.model("views", userSchema);
module.exports = userModel;