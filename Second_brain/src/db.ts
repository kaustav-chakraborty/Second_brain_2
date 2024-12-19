import { model,Schema } from "mongoose";
import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/brainly")

const UserSchema=new Schema({
    username:{type:String,unique:true},
    password:String
})

export const UserModel= model("User",UserSchema)

const contentSchema=new Schema({
    title:String,
    link:String,
    tags:[{type:mongoose.Types.ObjectId,ref:'Tag'}],
    type:String,
    userId:{type:mongoose.Types.ObjectId,ref:'User',required:true}

})
export const ContentModel=model("content",contentSchema)

const LinkSchema=new Schema({
    hash:String,
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
        unique:true
    }
})
export const LinkModel=model("share",LinkSchema)