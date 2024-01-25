const mongoose=require("mongoose")

const postModel = mongoose.Schema(
    {
        creator: {type:String,required:true},
        content: {
            type: mongoose.Schema.Types.Mixed, // Accepts any type of data
            required: true
        }
    },
    {timestamps:true}
)
const post = mongoose.model("Post",postModel)
module.exports=post