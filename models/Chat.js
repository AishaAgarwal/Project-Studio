import mongoose from "mongoose";
const Chatmodel=mongoose.Schema({
    chatName:{type:String,trim:true, index: true},
    isGroupchat:{type:Boolean,default:false},
    users:[{type:mongoose.Schema.Types.ObjectId,ref:'User', index: true}],
    latestMessage:{type:mongoose.Schema.Types.ObjectId,ref:'Message', sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    receiver: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },},
    groupAdmin:{type:mongoose.Schema.Types.ObjectId,ref:'User'},

},{timestamps:true})
mongoose.models={}
export default mongoose.model('Chat',Chatmodel);