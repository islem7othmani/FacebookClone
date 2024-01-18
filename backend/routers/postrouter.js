const { createPost,getPosts,getPostById,updatePost,deletePost } = require("../controllers/post");
const { votePost,unvotePost } = require("../controllers/vote");
const { createComment,updateComment,deleteComment } = require("../controllers/comment")

const route = require("express").Router();

route.post("/createPost", createPost);
route.get("/getPosts", getPosts);
route.get("/getPostById/:id", getPostById);
route.post("/updatePost/:id", updatePost);
route.delete("/deletePost/:id", deletePost);
route.post("/:id/votePost", votePost);
route.delete("/unvote/:voteId", unvotePost);
route.post("/comment", createComment);
route.post("/updatecomment/:id", updateComment);
route.delete("/deletecomment/:id", deleteComment);

module.exports = route;
