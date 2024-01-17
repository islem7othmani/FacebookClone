const { createPost,getPosts,getPostById,updatePost,deletePost } = require("../controllers/post");

const route = require("express").Router();

route.post("/createPost", createPost);
route.get("/getPosts", getPosts);
route.get("/getPostById/:id", getPostById);
route.get("/updatePost/:id", updatePost);
route.delete("/deletePost/:id", deletePost);

module.exports = route;
