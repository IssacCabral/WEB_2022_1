import StudentController from '../app/controllers/StudentController'
import {Router} from 'express'

const studentRouter = Router()

studentRouter.post('/students', StudentController.create)
studentRouter.get('/students', StudentController.find)
studentRouter.put('/students/:_id', StudentController.update)
studentRouter.delete('/students/:_id', StudentController.delete)

export default studentRouter