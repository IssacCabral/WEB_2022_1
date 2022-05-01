import {IStudentDTO} from './DTO/StudentDTO'
import Student from '../models/Student'

class StudentsService{
    async create({name, course, ira}: IStudentDTO){
        const student = await Student.create({name, course, ira})
        return {data: student}
    }

    async findByPk(id: number){
        const studentSearch = await Student.findByPk(id)

        if(studentSearch === null) return {error: "student não encontrado pelo id"}

        return {data: studentSearch}
    }

    async destroy(id: number){
        const studentSearch = await Student.findByPk(id)
        if(studentSearch === null) return {error: "Student não encontrado pelo id"}
        await Student.destroy({where: {id}})
        return {data: 'Student removido'}
    }
}

export default new StudentsService