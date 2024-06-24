const mongoose=require("mongoose");

const Schema=new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            maxLength:50,
        },
        description:{
            type:String,
            required:true,
            maxLength:1000,
        },
        like:{
            type:Boolean,
            required:true,
            default:false,
        },
        comments:{
            type:Array,
            required:true,
        }
    }
);

module.exports=mongoose.model("Todo",Schema);