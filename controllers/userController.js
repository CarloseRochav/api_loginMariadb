const con = require("../db/mariaDb");
//const mysql= require("mysql2");
const axios = require("axios");


let userController={};

userController.getUsers= async (req,res)=>{
  //Query Statement
  const getUsersSQL = await "SELECT * FROM USERS"; //Sentencia a ejecutar

  try{
  // make to connection to the database.
             
        con.query(getUsersSQL, (err, rows) => {

          if (err) {
              console.log("Error");
              res.json({
                  msg:`Error encontrado : ${err}`
              })
              throw err;
          } else {

          }

          //return res.json({'resul ':rows});
          console.log(rows);
          res.json({
              code:"201",
              Usuarios:rows
          })
      });           

    }catch(e){
        console.log(e)
    }finally{
        console.log(`Finally Sentencia Finalizada`);
    }
}

module.exports=userController;

