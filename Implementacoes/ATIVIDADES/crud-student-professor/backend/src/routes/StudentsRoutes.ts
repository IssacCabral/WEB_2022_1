import StudentsController from "../app/controllers/StudentsController";
import { Router } from "express";

const studentRouter = Router()

studentRouter.get('/students', StudentsController.findAll)
studentRouter.post('/students', StudentsController.create)
studentRouter.get('/students/:id', StudentsController.findByPk)
studentRouter.delete('/students/:id', StudentsController.destroy)
studentRouter.put('/students/:id', StudentsController.update)


export default studentRouter