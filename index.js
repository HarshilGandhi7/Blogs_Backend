const express=require("express");
const app=express();
require("dotenv").config();

const PORT=process.env.PORT|| 3000;

app.use(express.json());//middleware very important 

const TodoRoutes=require("./routes/Todo");
app.use("/api/v1",TodoRoutes);

app.listen(PORT,()=>{
    console.log(`Server Initiated at ${PORT}`);
})

const dbConnect=require("./config/database");
dbConnect();

app.get("/",(req,res)=>{
    res.send("Welcome to Our Blogs Website");
})

