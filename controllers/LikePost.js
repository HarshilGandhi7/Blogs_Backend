const Todo=require("../model/TodoSchema");

exports.LikePost=async(req,res)=>{
    try{
        const id=req.params.id;
        const found=await Todo.findOne({_id:id});
        if(!found){
            return res.status(404).json({
                success:false,
                message:"Blog Not Found",
            })
        }
        found.like=true;

        await found.save();
        res.status(500).json({
            success:true,
            response:found,
            message:"Post Liked Successfully"
        })

    }catch(err){
        return res.status(500).json({
            success:false,
            message:"Internal Server Error",
        })
    }
}