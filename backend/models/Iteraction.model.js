const mongoose = require("mongoose");

const voteModel = mongoose.Schema(
    {
        creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        post: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
    },
    { timestamps: true }
);

const Vote = mongoose.model("Vote", voteModel);
module.exports = Vote;
