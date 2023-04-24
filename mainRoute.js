import { Router } from 'express'
const router = Router()

import * as mainController from './mainController.js'

router.get('/', mainController.getMain)
router.get('/:id', mainController.getMainById)
router.post('/', mainController.createMain)
router.delete('/', mainController.deleteMain)


export default router