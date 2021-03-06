import Student from "../models/Student";
import {Request, Response} from 'express'
import StudentsService from "../services/StudentsService";

class StudentsController{
    async create(request: Request, response: Response){
        const {name, course, ira} = request.body

        const dataMandatory = ['name', 'course', 'ira']

        const errors: Array<any> = []

        dataMandatory.forEach(element => {
            if(!request.body[element]){
                errors.push({
                    field: element,
                    message: `O campo ${element} é obrigatório`
                })
            }
        })

        if(errors.length > 0){
            return response.json({errors})
        }

        const data = await StudentsService.create({name, course, ira})

        return response.status(200).json(data.data)
    }

    async findAll(request: Request, response: Response){
        const students = await Student.findAll()
        return response.status(200).json(students)
    }

    async findByPk(request: Request, response: Response){
        const id = parseInt(request.params.id)

        const data = await StudentsService.findByPk(id)

        return data["error"] ? response.status(404).json(data) : response.status(200).json(data.data)
    }

    async update(request: Request, response: Response){
        const id = parseInt(request.params.id)
        const {name, course, ira} = request.body

        const dataMandatory = ['name', 'course', 'ira']

        const errors: Array<any> = []

        dataMandatory.forEach(element => {
            if(!request.body[element]){
                errors.push({
                    field: element,
                    message: `o campo ${element} é obrigatório`
                })
            }
        })

        if(errors.length > 0){
            return response.json({errors})
        }

        const data = await StudentsService.findByPk(id)

        if(data['error']) return response.status(404).json(data)

        const updateResult = await StudentsService.update(data.data, {name, course, ira})
        return response.status(200).json(updateResult)        
    }

    async destroy(request: Request, response: Response){
        const id: number = parseInt(request.params.id)
        const data = await StudentsService.destroy(id)
        return data["error"] ? response.status(400).json(data) : response.status(200).json(data.data)
    }
}

export default new StudentsController()