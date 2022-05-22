import StudentController from '../app/controllers/StudentController'
import {Router} from 'express'

const studentRouter = Router()

studentRouter.get('/list', StudentController.find)
studentRouter.post('/create', StudentController.create)
studentRouter.get('/find/:id', StudentController.findById)
studentRouter.put('/update/:id', StudentController.update)
studentRouter.delete('/delete/:id', StudentController.delete)

export default studentRouter