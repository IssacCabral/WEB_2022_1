import {IProfessorDTO} from './DTO/ProfessorDTO'
import Professor from '../models/Professor'

class ProfessorsService{
    async create({name, university, degree}: IProfessorDTO){
        const professor = await Professor.create({name, university, degree})
        return {data: professor}
    }

    async findByPk(id: number){
        const professorSearch = await Professor.findByPk(id)

        if(professorSearch === null) return {error: "professor não encontrado pelo id"}

        return {data: professorSearch}
    }

    async update(professor: any, {name, university, degree}: IProfessorDTO){
        await Professor.update({name, university, degree}, {where: {id: professor.id}})
        return {data: 'Professor atualizado'}
    }

    async destroy(id: number){
        const professorSearch = await Professor.findByPk(id)
        if(professorSearch === null) return {error: "Professor não encontrado pelo id"}
        await Professor.destroy({where: {id}})
        return {data: 'Professor removido'}
    }
}

export default new ProfessorsService()