const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    Image: {
        type: String,
        required: true
    }

}, {
    timestamps: true
})

module.exports = mongoose.model("post", postSchema)