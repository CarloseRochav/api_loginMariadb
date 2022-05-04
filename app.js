const express = require("express");
const app = express();
//const cors =require("cors");



//Uso de bodyParser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// habilitar cors
//app.use(cors());

// puerto de la apps


module.exports=app;