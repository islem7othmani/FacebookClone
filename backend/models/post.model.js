const mongoose=require("mongoose")

const postModel = mongoose.Schema(
    {
        creator: {type:String,required:true},
        content: {type:String,required:true},
    },
    {timestamps:true}
)
const post = mongoose.model("Post",postModel)
module.exports=post