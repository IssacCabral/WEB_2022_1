import ProfessorsController from "../app/controllers/ProfessorsController";
import { Router } from "express";

const professorRouter = Router()

professorRouter.get('/professors', ProfessorsController.findAll)
professorRouter.post('/professors', ProfessorsController.create)
professorRouter.get('/professors/:id', ProfessorsController.findByPk)
professorRouter.delete('/professors/:id', ProfessorsController.destroy)
professorRouter.put('/professors/:id', ProfessorsController.update)

export default professorRouter