const { Router } = require("express");
const express = require("express");
const router = express.Router();


router.get("/get-users",(req,res)=>{
    
    res.send("Esta es la ruta de get-users");
    
});


module.exports=router;