//npm install --save express body-parser express-handlebars nodemailer

const express = require('express');
const bodyParser  = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path')
//const nodemailer = require('nodemailer');

const app = express();

//View engine setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');

//Static Folder
app.use('', express.static(path.join(__dirname, 'public')));

//Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res)=> {
    res.render('index', {layout: false});
});

app.get('/selected_cities', (req, res)=> {
    console.log("Origen: " + req.query.origen);
    console.log("Destino: " +req.query.destino);
    //escribirlo en un txt
    //correr el programa de lisp
    //Recibir ruta óptima
    //Enviar la lista de la ruta para graficar
    res.send(["Saltillo", "Nuevo León", "La Paz"])
    //enviar tiempo o longitud total
});

//var port = process.env.PORT || 3000;
var port = 3000;

app.listen(port, ()=> console.log(`Server started at http://localhost:${port}`));
