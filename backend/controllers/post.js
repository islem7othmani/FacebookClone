const postModel = require("../models/post.model");

const createPost = async (req, res) => {
	const newPost = new postModel({
		creator: req.body.creator,
		content: req.body.content,
        image: req.body.image,
        video: req.body.video,
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

const getPostsByCreator = async (req, res) => {
    const creatorId = req.params.creator;

    try {
        const posts = await postModel.aggregate([
            { $match: { creator: creatorId } }, // Match posts by the specified creator
            {
                $lookup: {
                    from: "Vote",
                    localField: "_id",
                    foreignField: "post",
                    as: "likes",
                },
            },
            {
                $lookup: {
                    from: "Comment",
                    localField: "_id",
                    foreignField: "post",
                    as: "comments",
                },
            },
            { $sort: { createdAt: -1 } } // Optionally sort the posts by createdAt field
        ]);

        return res.status(200).json(posts);
    } catch (err) {
        return res.status(500).json(err);
    }
};



const getPostById = async (req, res) => {
    const id = req.params.id;
    try {
        const post = await postModel.findById(id);
        const postInfos = await postModel.aggregate([
            { $match: { _id: post._id } }, // Use _id from the post fetched by findById
            {
                $lookup: {
                    from: "Vote",
                    localField: "_id",
                    foreignField: "post",
                    as: "likes",
                },
            },
            {
                $lookup: {
                    from: "Comment",
                    localField: "_id",
                    foreignField: "post",
                    as: "comments",
                },
            },
           
        ]);

        return res.status(200).json(postInfos);
    } catch (err) {
        return res.status(500).json(err);
    }
};

module.exports = { getPostById };


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
module.exports.getPostsByCreator=getPostsByCreator;