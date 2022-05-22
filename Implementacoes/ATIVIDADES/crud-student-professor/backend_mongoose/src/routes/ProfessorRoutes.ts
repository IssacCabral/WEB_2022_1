import ProfessorController from '../app/controllers/ProfessorController'
import {Router} from 'express'

const professorRouter = Router()

professorRouter.post('/professors', ProfessorController.create)
professorRouter.get('/professors', ProfessorController.find)
professorRouter.put('/professors/:_id', ProfessorController.update)
professorRouter.delete('/professors/:_id', ProfessorController.delete)

export default professorRouter