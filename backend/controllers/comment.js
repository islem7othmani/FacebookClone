const commentModel = require("../models/comment.model");

const createComment = async (req, res) => {
    try {
        const commentExists = await commentModel.findOne({
            creator: req.body.creator,
            post: req.body.post,
            content: req.body.content,
        });
        if (commentExists) return res.status(204).json();

        const newComment = new commentModel({
            creator: req.body.creator,
            post: req.body.post,
            content: req.body.content,
        });

        await newComment.save();
        return res.status(204).json();
    } catch (err) {
        return res.status(500).json(err);
    }
};

const updateComment = async (req, res) => {
	const id = req.params.id;
	try {
		const comment = await commentModel.findByIdAndUpdate(id, req.body, {
			new: true,
		});
		return res.status(200).json(comment);
	} catch (err) {
		return res.status(500).json(err);
	}
};

const deleteComment = async (req, res) => {
	const comment = req.params.id;
	try {
		await commentModel.findOneAndDelete(comment);

		return res.status(204).json();
	} catch (err) {
		return res.status(500).json(err);
	}
};
module.exports.createComment = createComment;
module.exports.deleteComment = deleteComment;
module.exports.updateComment = updateComment;