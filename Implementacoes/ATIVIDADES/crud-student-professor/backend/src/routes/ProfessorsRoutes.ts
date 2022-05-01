import ProfessorsController from "../app/controllers/ProfessorsController";
import { Router } from "express";

const professorRouter = Router()

professorRouter.get('/crud/professors', ProfessorsController.findAll)
professorRouter.post('/crud/professors', ProfessorsController.create)
professorRouter.get('/crud/professors/:id', ProfessorsController.findByPk)
professorRouter.delete('/crud/professors/:id', ProfessorsController.destroy)
professorRouter.put('/crud/professors/:id', ProfessorsController.update)

export default professorRouter