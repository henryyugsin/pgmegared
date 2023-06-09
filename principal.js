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
app.get("/principal.css",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./principal.css'));
});
app.get("/css/nosotros.css",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./css/nosotros.css'));
});
app.get("/css/contactanos.css",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./css/contactanos.css'));
});
app.get("/css/puntosdepago.css",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./css/puntosdepago.css'));
});
app.get("/css/personal.css",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./css/personal.css'));
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
app.get("/images/pichinchamivecino.jpg",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./images/pichinchamivecino.jpg'));
});
app.get("/images/bancamovil.jpg",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./images/bancamovil.jpg'));
});
app.get("/images/procredit.jpg",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./images/procredit.jpg'));
});
app.get("/images/arcotel.jpg",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./images/arcotel.jpg'));
});
app.get("/images/iconopersona.jpg",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./images/iconopersona.jpg'));
});
//Enviamos las paginas
app.get("/",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'principal.html'));
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

//Enviamos los datos del personal
app.get("/personal/1",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./html/personal1.html'));
});
app.get("/personal/2",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./html/personal2.html'));
});
app.get("/personal/3",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./html/personal3.html'));
});
app.get("/personal/4",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./html/personal4.html'));
});
app.get("/personal/5",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./html/personal5.html'));
});
app.get("/personal/6",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./html/personal6.html'));
});
app.get("/personal/7",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./html/personal7.html'));
});
app.get("/personal/8",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./html/personal8.html'));
});
app.get("/personal/9",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./html/personal9.html'));
});
app.get("/personal/10",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./html/personal10.html'));
});