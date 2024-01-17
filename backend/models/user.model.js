const mongoose=require("mongoose")

const UserModel = mongoose.Schema(
    {
        username: {type:String,required:true},
        email: {type:String,required:true},
        password: {type:String,required:true},
        profilepic: {type:String}
    },
    {timestamps:true}
)
const User = mongoose.model("User",UserModel)
module.exports=User