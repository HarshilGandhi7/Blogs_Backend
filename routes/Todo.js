const express=require("express");
const {CreateTodo}=require("../controllers/CreateTodo");
const {FetchAll}=require("../controllers/FetchAll");
const {LikePost}=require("../controllers/LikePost");
const {UnLikePost}=require("../controllers/UnLikePost");
const {CreateComments}=require("../controllers/CreateComments");
const {FetchComment}=require("../controllers/FetchComment");
const Router=express.Router();

Router.post("/CreateTodo",CreateTodo);
Router.get("/FetchAll",FetchAll);
Router.put("/LikePost/:id",LikePost);
Router.put("/UnLikePost/:id",UnLikePost);
Router.put("/CreateComments/:id",CreateComments);
Router.put("/FetchComment/:id",FetchComment);

module.exports=Router;
