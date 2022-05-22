import StudentModel from '../models/Student'

interface IStudentDTO{
    name: string,
    course: string,
    ira: number
}

class StudentService{
    async create({name, course, ira}: IStudentDTO){
        const data = {
            name,
            course,
            ira
        }
        const student = await StudentModel.create({name, course, ira})
        return {...data, id: student._id}
    }

    async index(){
        return StudentModel.find()
    }
    
    async findById(id: any){
        const studentSearch = await StudentModel.findById(id)

        if(studentSearch === null) return {error: "Estudante não encontrado"}

        return {data: studentSearch}
    }

    async update(id: any, {name, course, ira}: IStudentDTO){
        const student =  await StudentModel.findByIdAndUpdate(id, {name, course, ira}, {'new': true})
        return {data: `Estudante Atualizado!`}
    }

    async delete(id: any){
        const studentSearch = await StudentModel.findById(id)
        if(studentSearch === null) return {error: 'Estudante não encontrado'}
        await StudentModel.findByIdAndRemove(id)
        return {data: 'student removido'}
    }
}

export default new StudentService