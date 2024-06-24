const Todo=require("../model/TodoSchema");

exports.CreateTodo=async(req,res)=>{
    try{
        const {title,description}= req.body;
        const data=await Todo.create({title,description});
        res.status(200).json({
            success:true,
            response:data,
            message:"Blogs created successfully",
        })
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
}