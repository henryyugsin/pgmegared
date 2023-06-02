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
app.get("/css/nosotros.css",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./css/nosotros.css'));
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
app.get("/images/promocion3.jpg",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./images/promocion3.jpg'));
});
app.get("/images/promocion4.jpg",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./images/promocion4.jpg'));
});
app.get("/images/nosotros.jpg",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./images/nosotros.jpg'));
});
app.get("/images/servicios.jpg",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./images/servicios.jpg'));
});
app.get("/images/logo-pie-pagina.jpg",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./images/logo-pie-pagina.jpg'));
});
app.get("/images/promocion1-telefono.jpg",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./images/promocion1-telefono.jpg'));
});
app.get("/images/promocion2-telefono.jpg",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./images/promocion2-telefono.jpg'));
});
app.get("/images/promocion3-telefono.jpg",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./images/promocion3-telefono.jpg'));
});
//Enviamos las paginas
app.get("/",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'prueba.html'));
});
app.get('/speedytest', (req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./html/speedytest.html'));
});
app.get('/nosotros', (req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./html/nosotros.html'));
});
app.get('/contacto', (req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./html/contacto.html'));
});
app.get('/puntosdepago', (req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./html/puntosdepago.html'));
});
//Iniciamos el servidor
var server = http.listen(8081,()=>{
    console.log("Servidor corriendo en el puerto:",
    server.address().port);
})

