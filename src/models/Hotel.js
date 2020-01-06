const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const PictureSchema = new mongoose.Schema({
    url: { type: String, required: true },
  }, { _id: false });
  
  const HotelSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    direccion: { type: String, uppercase: true },
    precio: { type: Number, required: true },
    puntuacion: { type: Number, required: true },
    loc: { type: [Number], index: { type: '2dsphere', sparse: true } },
    telefono: { type: String },
    informacion: { type: String, required: true },
    imagenes: [PictureSchema],
  }, { timestamps: true });
  
  module.exports = mongoose.model('Hotel', HotelSchema)