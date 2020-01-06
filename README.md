# API Hotel
API de hoteles construidos con Node.JS, Express.JS y MongoDB para ser utilizados en una aplicación React Native.

- Construido con Node.js and Express
- Mongoose schema

## Express Router and Routes

| Route           | HTTP Verb | Description                          |
| --------------- | --------- | ------------------------------------ |
| /hotel      | GET       | Obtener lista de hoteles             |
| /hotel/buscar/:id  | GET       | Obtener un hotel por id           |
| /hotel/buscar/:filter  | GET       | Obtenga una lista de hoteles por búsqueda |
| /hotel                 | POST       | Agregar un Hotel             |
| /hotel/:id             | PUT        | Actualizar hotel por id      |
| /hotel/:id             | DELETE        | Eliminar hotel por id      |


## Herramientas utilizadas en este proyecto.
* [NodeJS](https://nodejs.org/en/)
* [ExpressJS](https://expressjs.com/)
* [Mongoose](http://mongoosejs.com/)
* [Nodemon](https://nodemon.io/)

## Empezando

### Prerrequisitos

- [Git](https://git-scm.com/)
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`
- [Node.js and npm](nodejs.org) Node >= 12 LTS

### Developing

1. Ejecutar el comando `npm install`  para instalar las dependencias del servidor.

2. Ejecutar el comando `mongod` en otra terminal para mantener el servicio de MongoDB ejecutándose .

3. Documento de ejemplo en colección `Hoteles`.
```json
{
    "loc": [
            40.7191258,
            -74.0024616
        ],
        "_id": "5e1002c34bdc312bdda0d408",
        "nombre": "11 Howard",
        "direccion": "11 HOWARD ST, NEW YORK, NY 10013, USA",
        "precio": "54,302",
        "puntuacion": 3,
        "telefono": "+1 (948) 432-3271",
        "informacion": "El 11 Howard está situado cerca de los barrios de Soho, Bowery, Chinatown y Little Italy, en Manhattan, y ofrece WiFi gratuita en todas las instalaciones. El establecimiento alberga un bar, ideal para relajarse con una copa.",
        "imagenes": [
            {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvXfh38BbCYobOwi6isjw06C6iBbhyB4POri_NOBSf8heiAlcC"
            },
            {
                "url": "https://www.dorchestercollection.com/wp-content/uploads/rome-hotel-eden-lobby_landscape-1600x900.jpg"
            },
            {
                "url": "http://www.starwoodhotels.com/pub/media/101/lux101re.195749_md.jpg"
            },
            {
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6SAmX56rDEhUXOYQO4cwp2nmoyyo1sLGfMEaycggUYWGRJ5oz"
            }
        ]
}
```

3. Ejecutar el comando `npm run dev` para iniciar el servidor de desarrollo. It should automatically open the client in your browser when ready.

4. Abrir el navegador y colocar la siguiente ruta `http://localhost:3000/hotel`.

### Deployment

Se utiliza la plataforma como servicio (PaaS), para el despliegue de [API](https://apihoteles.herokuapp.com) usando HEROKU CLI y sigiendo la guia [guide](https://devcenter.heroku.com/articles/getting-started-with-nodejs#deploy-the-app).

## License

Este proyecto tiene licencia bajo MIT  [LICENSE](LICENSE) para mas detalles abrir el archivo

