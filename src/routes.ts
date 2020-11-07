import { Router } from 'express'
import OrphanagesController from './controllers/OrphanagesController'

const routes = Router()

//Criação de um novo orfanato
routes.post('/orphanages', OrphanagesController.create)

//Listagem de todos os orfanatos
routes.get('/orphanages', OrphanagesController.index)

//Listagem de um orfanato específico 
routes.get('/orphanages/:id', OrphanagesController.show)

export default routes
