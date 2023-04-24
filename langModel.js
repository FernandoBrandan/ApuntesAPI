import { Schema, model } from 'mongoose'

const langSchema = new Schema({
    nombreLenguaje: String,
    idTitulo: Number,    
}, {
    timestamps: true,
    versionKey: false
})

export default model('language', langSchema)