const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        unique:[true, "username is already exists"],
        required: [true, "username is required"]
    },
    email:{
        type: String,
        unique: [true, "email is already exists"],
        required: [true, "email is required"]
    },
    password:{
        type: String,
        required: [true, "password is required"]
    },
    bio:String,
    profileImage: {
        type: String,
        default: "https://ik.imagekit.io/mahesh99/default-profile.jpg"
    },
})

const userModel = mongoose.model("insta-users", userSchema)

module.exports = userModel