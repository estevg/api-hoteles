require('dotenv').config();

require('./db');
const app = require('./app');


async function main(){
   await app.listen(app.get('port'), app.get('host'));
    console.log('Ejecutando desde el puerto ', app.get('port'), app.get('host'));
}

main();