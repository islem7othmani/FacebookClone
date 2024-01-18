const { votePost } = require("../controllers/vote");

const route = require("express").Router();

route.post("/:post/votePost", votePost);


module.exports = route;
