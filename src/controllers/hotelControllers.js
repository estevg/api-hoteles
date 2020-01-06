const Hotel = require('../models/Hotel');


// Agregar un nuevo Hotel
exports.nuevoHotel = async (req, res, next) => {

    const data = Hotel(req.body)
    try {
        await data.save();
        res.json({mensaje: 'El Hotel fue agregado', data})
    } catch (error) {
        console.log(error)
        next();
    }
}

// obtener todos los hoteles
exports.obtenerHoteles = async (req, res, next) => {

    try {
        const data = await Hotel.find({})
        res.json(data);
    } catch (error) {
        console.log(error)
        next()
    }
}

// obtener un hotel por id 
exports.buscarHotel = async (req, res, next) => {

    try {
        const data = await Hotel.findById(req.params.id)
        res.json(data)
    } catch (error) {
        console.log(error)
        next();
    }
}

// Filtrar varios hoteles  
exports.buscarHoteles = async (req, res, next) => {

    try {
        const { filter } = req.params;
        const query = {
          nombre: { $regex: filter, $options: 'i' },
        };
        const data = await Hotel.find(query)
        res.json(data)
    } catch (error) {
        console.log(error)
        next();
    }

}

// Actualizar un Hotel
exports.actualizarHotel = async (req, res, next) => {
    try {
        const data = await Hotel.findOneAndUpdate({_id: req.params.id}, req.body, {
            new: true,
        })
        res.json(data)
    } catch (error) {
        console.log(error)
        next();
    }

}
// Eliminar un Hotel 
exports.eliminarHotel = async (req, res, next) => {
    try {
        await Hotel.findByIdAndRemove(req.params.id)
        res.json({mensaje: 'El Hotel fue eliminado'})
    } catch (error) {
        console.log(error);
        next();
    }
}