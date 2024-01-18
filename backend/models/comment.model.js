const mongoose = require("mongoose");

const commentModel = mongoose.Schema(
    {
        creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        post: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
        content:{type:String, required:true}
    },
    { timestamps: true }
);

const Comment = mongoose.model("Comment", commentModel);
module.exports = Comment;