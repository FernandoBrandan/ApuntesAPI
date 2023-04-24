import { Schema, model } from 'mongoose'

const mainSchema = new Schema({
    nombreLenguaje: String,
}, {
    timestamps: true,
    versionKey: false
})

export default model('main', mainSchema)