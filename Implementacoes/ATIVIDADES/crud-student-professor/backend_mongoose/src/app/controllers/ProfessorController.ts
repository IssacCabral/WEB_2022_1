import {Request, Response} from 'express'
import ProfessorModel from "../models/Professor";
import ProfessorService from '../services/ProfessorService';

class ProfessorController{
    async create(request: Request, response: Response){
        const {name, university, degree} = request.body

        const dataMandatory = ["name", "university", "degree"]

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

        const data = await ProfessorService.create({name, university, degree})
        return response.status(200).json(data)
    }

    async find(request: Request, response: Response){
        const Professors = await ProfessorModel.find()
        return response.status(200).json(Professors)
    }

    async update(request: Request, response: Response){
        const _id = request.params._id
        const {name, university, degree} = request.body

        const dataMandatory = ["name", "university", "degree"]

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

        const data = await ProfessorService.findById(_id)
        if(data['error']) return response.status(400).json(data)

        const updateResult = await ProfessorService.update(_id, {name, university, degree})
        return response.status(200).json(updateResult)
    }

    async delete(request: Request, response: Response){
        const _id = request.params._id
        const data = await ProfessorService.delete(_id)
        return data['error'] ? response.status(400).json(data.error) : response.status(200).json(data.data)
    }
}

export default new ProfessorController