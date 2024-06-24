const Todo=require("../model/TodoSchema");

exports.UnLikePost=async(req,res)=>{
    try{
        const id=req.params.id;
        const found=await Todo.findOne({_id:id});
        if(!found){
            return res.status(404).json({
                success:false,
                message:"Blog Not Found",
            })
        }
        found.like=false;
        await found.save();
        res.status(200).json({
            success:true,
            message:"Post UnLiked Successfully",
            response:found,
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            message:"Internal Server Error",
        })
    }
}
    
