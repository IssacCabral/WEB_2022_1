import Professor from '../models/Professor';
import {Request, Response} from 'express'
import ProfessorsService from '../services/ProfessorsService'

class StudentsController{
    async create(request: Request, response: Response){
        const {name, university, degree} = request.body

        const dataMandatory = ['name', 'university', 'degree']

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

        const data = await ProfessorsService.create({name, university, degree})

        return response.status(200).json(data.data)
    }

    async findAll(request: Request, response: Response){
        const professors = await Professor.findAll()
        return response.status(200).json(professors)
    }
   
    async findByPk(request: Request, response: Response){
        const id = parseInt(request.params.id)

        const data = await ProfessorsService.findByPk(id)

        return data["error"] ? response.status(404).json(data) : response.status(200).json(data.data)
    }

    async update(request: Request, response: Response){
        const id = parseInt(request.params.id)
        const {name, university, degree} = request.body

        const dataMandatory = ['name', 'university', 'degree']

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

        const data = await ProfessorsService.findByPk(id)

        if(data['error']) return response.status(404).json(data)

        const updateResult = await ProfessorsService.update(data.data, {name, university, degree})
        return response.status(200).json(updateResult)        
    }

    async destroy(request: Request, response: Response){
        const id: number = parseInt(request.params.id)
        const data = await ProfessorsService.destroy(id)
        return data["error"] ? response.status(400).json(data) : response.status(200).json(data.data)
    }
}

export default new StudentsController()