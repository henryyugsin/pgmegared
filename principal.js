var express = require('express')
const bodyParser = require('body-parser')
const { socket } = require('socket.io')
const { emit } = require('process')
const path = require("path");
const { Console } = require('console');
var app = express().use(bodyParser.json());
var http = require('http').Server(app)
var io = require('socket.io')(http)

//empezamos enviando los estilos de css
app.get("/prueba.css",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./prueba.css'));
});

//Enviamos las imagenes
app.get("/images/logo.jpg",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./images/logo.jpg'));
});
app.get("/images/promocion1.jpg",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./images/promocion1.jpg'));
});
app.get("/images/promocion2.jpg",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./images/promocion2.jpg'));
});
app.get("/images/redessociales.jpg",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./images/redessociales.jpg'));
});
//Enviamos la pagina principal
app.get("/",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'prueba.html'));
});

var server = http.listen(8081,()=>{
    console.log("Servidor corriendo en el puerto:",
    server.address().port);
})

