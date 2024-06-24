const Todo=require("../model/TodoSchema");

exports.FetchAll=async(req,res)=>{
   try{
        const data=await Todo.find({});
        res.status(200).json({
            success:true,
            response:data,
            message:"Todo List Fetched Successfully",
        })
   }catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
   }

}