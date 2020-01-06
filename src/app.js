const express = require('express');
const routes = require('./routes')
const bodyParser = require('body-parser')
const cors = require('cors')

// Crear servidor 
const app = express();

app.set('host', process.env.HOST || '0.0.0.0');
app.set('port', process.env.PORT || 5000);

// Asegurar nuestra api 
// const whitelist = ['http://localhost:3000'];
// const corsOptions = {
//     origin: (origin, callback) => {

//         const existe = whitelist.some( dominio => dominio === origin);
//         if (existe) {
//             callback(null, true)
//         }else {
//             callback(new Error('No permitido por Cors'))
//         }
//     }
// }

// Habilitar cors
// app.use(cors(corsOptions));

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// Habilitar el routing
app.use('/', routes()); 

module.exports = app;
