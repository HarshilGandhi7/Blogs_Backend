const mongoose=require("mongoose");

require("dotenv").config();
function dbConnect(){
    mongoose.connect(process.env.DATABASE_URL,{})
    .then(()=>{
        console.log("Database Sucessfully Connected");
    })
    .catch((error)=>{
        console.log("Error in Connecting Database");
        console.log(error.message);
        process.exit(1);
    })
}

module.exports=dbConnect;