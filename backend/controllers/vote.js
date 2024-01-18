const voteModels = require("../models/Iteraction.model");

const votePost = async (req, res) => {
    try {
        const voteExist = await voteModels.findOne({
            creator: req.body.creator,
            post: req.body.post,
        });
        if (voteExist) return res.status(204).json();

        const newVote = new voteModels({
            creator: req.body.creator,
            post: req.body.post,
        });

        await newVote.save();
        return res.status(204).json();
    } catch (err) {
        return res.status(500).json(err);
    }
};


const unvotePost = async (req, res) => {
	const vote = req.params.id;
	try {
		await voteModels.findOneAndDelete(vote);

		return res.status(204).json();
	} catch (err) {
		return res.status(500).json(err);
	}
};
module.exports.votePost = votePost;
module.exports.unvotePost = unvotePost;