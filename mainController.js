import mainModel from "./mainModel.js"
import langModel from "./langModel.js"

export const getMain = async (req, res) => {
    const main = await mainModel.find().sort({nombreLenguaje:1})
    res.json(main)
}

export const getMainById = (req, res) => {
    console.log('controller')
}

export const createMain = async (req, res) => {
    //validaciones repetidos
    let nombreLenguaje
    console.log('body', req.body)
    console.log('params', req.params)
    if(req.body){
        nombreLenguaje = req.body.nombreLenguaje        
    }
    if(req.params){
        nombreLenguaje = req.params.nombreLenguaje
    } 
    console.log('-->>>> ', nombreLenguaje)
 
    const newMain = new mainModel(nombreLenguaje)
    const mainSaved = await newMain.save()
    // const newLang = new langModel(nombreLenguaje)
    // const langSaved = await newLang.save() 
    res.json(mainSaved)
}

export const updateMain = (req, res) => {
    console.log('controller')
}

export const deleteMain = async (req, res) => {
    //variantes entre body-JSON  o html params
    await mainModel.findOneAndDelete({"nombreLenguaje": req.body.nombreLenguaje})      
    res.json(mainModel)
  
}
