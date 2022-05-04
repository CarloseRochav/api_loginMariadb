const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");


// router.get("/get-users",(req,res)=>{
    
//     res.send("Esta es la ruta de get-users");
    
// });

router.get("/get-users",userController.getUsers);

router.post("/post-user",userController.postUser);

router.get("/delete-users",userController.deleteUsers);


module.exports=router;