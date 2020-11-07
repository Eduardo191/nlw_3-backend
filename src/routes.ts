import { Router } from 'express'
import OrphanagesController from './controllers/OrphanagesController'

const routes = Router()


//Criação de um novo orfanato
routes.post('/orphanages', OrphanagesController.create)

export default routes
