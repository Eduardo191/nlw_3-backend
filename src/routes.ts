import { Router } from 'express'
import OrphanagesController from './controllers/OrphanagesController'
import multer from 'multer'
import uploadConfig from './config/upload'

const routes = Router()
const upload = multer(uploadConfig)

//Criação de um novo orfanato
routes.post('/orphanages', upload.array('images'), OrphanagesController.create)

//Listagem de todos os orfanatos
routes.get('/orphanages', OrphanagesController.index)

//Listagem de um orfanato específico 
routes.get('/orphanages/:id', OrphanagesController.show)

export default routes
