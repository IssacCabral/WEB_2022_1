import ProfessorController from '../app/controllers/ProfessorController'
import {Router} from 'express'

const professorRouter = Router()

professorRouter.get('/list', ProfessorController.find)
professorRouter.post('/create', ProfessorController.create)
professorRouter.get('/find/:_id', ProfessorController.findById)
professorRouter.put('/update/:_id', ProfessorController.update)
professorRouter.delete('/delete/:_id', ProfessorController.delete)

export default professorRouter