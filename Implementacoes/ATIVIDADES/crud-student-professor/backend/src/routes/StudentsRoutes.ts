import StudentsController from "../app/controllers/StudentsController";
import { Router } from "express";

const studentRouter = Router()

studentRouter.get('/crud/listStudents', StudentsController.findAll)
studentRouter.post('/crud/createStudent', StudentsController.create)
studentRouter.get('/crud/students/:id', StudentsController.findByPk)
studentRouter.delete('/crud/students/:id', StudentsController.destroy)
studentRouter.put('/crud/editStudent/:id', StudentsController.update)


export default studentRouter