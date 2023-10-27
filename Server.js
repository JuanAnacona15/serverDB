//Se declara el uso de los modulos

const express = require("express")
const mysql = require('mysql')
const myconn = require('express-myconnection')
const app = express()

const routes = require("./Routes")

//Se declara las rutas de la base de datos
const dbOptions = {
    host: 'localhost',
    port: '3306',
    user: 'Manu',
    password: '',
    database: 'redm'
}

//Se declara el puerto donde se va a escuchar
app.set('port', process.env.PORT || 2000)

//Midelwhares --------------------------------------------
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())
//Rutas --------------------------------------------------
//Se declara la ruta principal de la app
app.get("/", (req, res)=>{
    res.send("Welcome to my api")
})

app.use("/redm", routes)

//Se dice que la app va a escuchar en el puerto 9000
app.listen(app.get('port'), ()=>{
    console.log("Server running on port ", app.get('port'))
})