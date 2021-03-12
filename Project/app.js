//npm install --save express body-parser express-handlebars nodemailer

const express = require('express');
const bodyParser  = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
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
  
app.get('/about', (req, res)=> {
    res.render('about', {layout: false});
});

app.get('/about_us', (req, res)=> {
    res.render('about_us', {layout: false});
});

app.get('/selected_cities', (req, res)=> {
    var origen = req.query.origen;
    var destino = req.query.destino;
    console.log("Origen: " + origen);
    console.log("Destino: " + destino);

    const fs = require('fs')    

    const promise1 = new Promise(function executor(resolve, reject){
        //escribirlo en un txts
        
        var content = `(setq inicio '${origen} objetivo '${destino}) (astar inicio objetivo)`;

        try {
            const data = fs.writeFileSync('./lisp/query.txt', content, { flag: 'w+' })
            //file written successfully
            resolve("OK");
        } catch (err) {
            console.error(err)
            reject("Error");
        }
    });

    promise1.then( function(value){
        //correr el programa de lisp
        const {exec} = require("child_process");
        exec("clisp ./lisp/inicializa.lisp", (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
            }
            console.log(`stdout: lisp ejecutado por js ${stdout}`);
        });
    }, function(error){console.log("error then1")}).then(function(value) {
        //Enviar la lista de la ruta para graficar
        var ruta;
        var arraySolucion;  
        setTimeout(function(){ 
            fs.readFile('./lisp/resp.txt', 'utf8', function (err,data) {
                if (err) {
                return console.log(err);
                }
                arraySolucion = data.trimEnd().split(" ");
                console.log("Solución: " + arraySolucion);
                res.send(arraySolucion);
            });
         }, 1000);
        
    }, function(error){console.log("error then2")});

    

    //Recibir ruta óptima
    //-->El programa de lisp ya lo escribe en ./lisp/resp.txt

    
    
    //enviar tiempo o longitud total
});

//var port = process.env.PORT || 3000;
var port = 3000;

app.listen(port, ()=> console.log(`Server started at http://localhost:${port}`));
