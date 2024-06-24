const Todo=require("../model/TodoSchema");

exports.FetchComment=async (req,res)=>{
    try{
        const id=req.params.id;
        const found=await Todo.findById(id);
        const Comment=found.comments;
        res.status(200).json({
            success:true,
            comments:Comment,
            message:"Comments fetched successfully",
        })
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            message:"Internal Server Error",
        })
    }
}