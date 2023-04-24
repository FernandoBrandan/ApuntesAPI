// const authMiddleware = require('.tools/auth-middleware')
import bodyParser from 'body-parser'
import cors from 'cors'

const setupMiddleware = (app) => {
    app.use(cors())
    app.use(bodyParser.json());

    // innecesarios??
    // app.use(express.json()) 
    // app.use(express.urlencoded({ extended: false }))

    // authmiddleware.init();
    // app.use(authmiddleware.protectWithJwt);
}

export default
module.exports = setupMiddleware