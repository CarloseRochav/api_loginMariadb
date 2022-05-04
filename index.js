const app = require("./app");
const con = require("./db/mariaDb");
const userRoutes = require("./routes/userRoutes");


const port = process.env.PORT || 8080; //Puerto asignado


//Rutas en uso
app.use(userRoutes);



//Servidor escuchando
app.listen(port, "0.0.0.0", () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`)

   

    //Conexion con la base de datos establecida
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
      });

 });