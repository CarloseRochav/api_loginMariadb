const con = require("../db/mariaDb");
//const mysql= require("mysql2");
//const axios = require("axios");


let userController={};

userController.getUsers= async (req,res)=>{
  //Query Statement
  const getUsersSQL = await "SELECT * FROM USERS"; //Sentencia a ejecutar

  try{
  
                //Seleccionando Datos           
                con.connect(function(err) {
                    if (err) throw err;
                    con.query(getUsersSQL, function (err, result, fields) {
                    if (err) throw err;
                    console.log(result);

                        res.json({
                            code:"201",
                            Usuarios:result
                        })

                    });
                });

    }catch(e){
        console.log(e)
    }finally{
        console.log(`Finally Sentencia Finalizada`);
    }
}


userController.postUser=async(req,res)=>{

    const {name,lastname,email,password}= await req.body;
    //Query Statement
    const createUserSQL = "INSERT INTO USERS (nombre, apellido,email,password) VALUES (?,?,?,?)";

    

    try{

        con.connect(function(err) {
            if (err) throw err;
            //var sql = "INSERT INTO customers (name, address) VALUES ('Michelle', 'Blue Village 1')";
            con.query(createUserSQL,[name,lastname,email,password], function (err, result) {
              if (err) throw err;
              console.log("1 record inserted, ID: " + result.insertId);
              
                res.json({
                    code:201,
                    msg :` Resultado ${result.affectedRows} `,           
        
                    })
            });

          });

        

    }catch(err){

        console.log(`Error from api :${err}`);
        res.json({
            code:501,
            msg:` Error from api : ${err}`
        })
    }finally {
        if (con) return con.end();
        }
}



userController.deleteUsers=async (req,res)=>{

    const deleteUsersSQL = await "DELETE FROM USERS"; //Sentencia a ejecutar

  try{
  
                //Seleccionando Datos           
                con.connect(function(err) {
                    if (err) throw err;
                    con.query(deleteUsersSQL, function (err, result, fields) {
                    if (err) throw err;
                    console.log(result);

                        res.json({
                            code:"201",
                            id:result.affectedRows,
                            msg:"Todos los usuarios fueron eliminados"
                        })

                    });
                });

    }catch(e){
        console.log(e)
    }finally{
        console.log(`Finally Sentencia Finalizada`);
    }

}

module.exports=userController;

