const express = require('express');
const router = express.Router();
const HotelControllers = require('../controllers/hotelControllers')

module.exports = function(){


    router.post('/hotel',
        HotelControllers.nuevoHotel
    )

    
    router.get('/hotel',
        HotelControllers.obtenerHoteles
    )

    router.get('/hotel/buscar/:id', 
        HotelControllers.buscarHotel
    )

    router.get('/hotel/buscar/:filter', 
        HotelControllers.buscarHoteles
    )

    router.put('/hotel/:id',
        HotelControllers.actualizarHotel
    )

    router.delete('/hotel/:id',
    HotelControllers.eliminarHotel
    )

    return router

}
