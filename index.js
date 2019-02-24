const express = require("express");
const config = require("./config");
const mongoose = require("mongoose");
const api = require("./routes")
const app = express();

//setup

//midlewares
    app.use(express.json());
    app.use("/api", api);

//routes


mongoose.connect(config.db,  {useNewUrlParser: true}, (err, res)=>{
    if(err) {
        return console.log("Ha habido un error al intentar conectar con la base de datos");
    }
    console.log("conexion a la base de datos establecida")

    app.listen(config.port, ()=>{
        console.log("Servidor corriendo en el puerto: ", config.port);
    });
});

