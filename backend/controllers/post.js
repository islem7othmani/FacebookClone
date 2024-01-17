const postModel = require("../models/post.model");

const createPost = async (req, res) => {
	const newPost = new postModel({
		creator: req.body.creator,
		content: req.body.content,
	});
	try {  
		const savedPost = await newPost.save();
		return res.status(201).json(savedPost);
	} catch (err) {
		return res.status(500).json(err);
	}
};

const getPosts = async (req, res) => {
	try {
		const posts = await postModel.find().populate("creator");
		return res.status(200).json(posts);
	} catch (err) {
		return res.status(500).json(err);
	}
};

const getPostById = async (req, res) => {
	const id = req.params.id;
	try {
		const post = await postModel.findById(id);
		return res.status(200).json(post);
	} catch (err) {
		return res.status(500).json(err);
	}
};

const updatePost = async (req, res) => {
	const id = req.params.id;
	try {
		const post = await postModel.findByIdAndUpdate(id, req.body, {
			new: true,
		});
		return res.status(200).json(post);
	} catch (err) {
		return res.status(500).json(err);
	}
};


const deletePost = async (req, res) => {
	const id = req.params.id;
	try {
		const post = await postModel.findByIdAndDelete(id);
		return res.status(200).json(post);
        
	} catch (err) {
		return res.status(500).json(err);
	}
};

module.exports.createPost = createPost;
module.exports.getPosts = getPosts;
module.exports.getPostById = getPostById;
module.exports.updatePost = updatePost;
module.exports.deletePost = deletePost;