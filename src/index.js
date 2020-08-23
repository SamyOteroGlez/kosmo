const express = require('express');
const morgan = require('morgan');
const path = require('path');

//const {mongoose} = require('./database'); // se require la conexion con la bd

const app = express();

// Settings

app.set('port', process.env.PORT||3000); // se establece un puerto asignado por el sevidor o el 3000 por defecto

//middlewares

app.use(morgan('dev'));  // establece el uso de morgan para que muestre en consola todos los cambios y peticiones c-s
app.use(express.json()); // asigna  el formato json para trabajar con la bd

//routes

//app.use('/api/task', require('./routes/task.routes')); //asigna un url  a las rutas ya creadas para las consultas

//static files

app.use(express.static(path.join(__dirname, 'public'))); // en este caso se asigna una direccion para el html con el que se va a trabajar

// Starting the server 
app.listen(app.get('port'), ()=>{
    console.log(`server on port ${app.get('port')}`); // arranca el la aplicacion en el puerto asignado por el servidor
});
