const mongoose = require('mongoose');

const PostModel = mongoose.model(
    "node-api",
    {
        titre: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        }
    },
    "posts"
);

module.exports = { PostModel };