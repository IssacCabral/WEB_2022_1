import {Request, Response} from 'express'
import StudentModel from "../models/Student";
import StudentService from '../services/StudentService';

class StudentController{
    async create(request: Request, response: Response){
        const {name, course, ira} = request.body

        const dataMandatory = ["name", "course", "ira"]

        const errors: Array<any> = []

        dataMandatory.forEach((element) => {
            if(!request.body[element]){
                errors.push({
                    field: element,
                    message: `O campo ${element} é obrigatório`
                })
            }
        })

        if(errors.length > 0){
            return response.status(400).json(errors)
        }

        const data = await StudentService.create({name, course, ira})
        return response.status(200).json(data)
    }

    async find(request: Request, response: Response){
        const students = await StudentModel.find()
        return response.status(200).json(students)
    }

    async update(request: Request, response: Response){
        const _id = request.params._id
        const {name, course, ira} = request.body

        const dataMandatory = ["name", "course", "ira"]

        const errors: Array<any> = []

        dataMandatory.forEach((element) => {
            if(!request.body[element]){
                errors.push({
                    field: element,
                    message: `O campo ${element} é obrigatório`
                })
            }
        })

        if(errors.length > 0){
            return response.status(400).json(errors)
        }

        const data = await StudentService.findById(_id)
        if(data['error']) return response.status(400).json(data)

        const updateResult = await StudentService.update(_id, {name, course, ira})
        return response.status(200).json(updateResult)
    }

    async delete(request: Request, response: Response){
        const _id = request.params._id
        const data = await StudentService.delete(_id)
        return data['error'] ? response.status(400).json(data.error) : response.status(200).json(data.data)
    }
}

export default new StudentController