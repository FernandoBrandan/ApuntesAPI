import express from 'express'
const app = express()

//middleware
import bodyParser from 'body-parser'
app.use(bodyParser.json());

import cors from 'cors'
app.use(cors())

app.use(express.json()) 
app.use(express.urlencoded({ extended: false }))

//database
import './database.js'

//route
import mainRouter from './mainRoute.js'
app.use('/api/main', mainRouter)
//app
const port = 3030
app.listen(port, () => {
    console.log('Server started', port)
})