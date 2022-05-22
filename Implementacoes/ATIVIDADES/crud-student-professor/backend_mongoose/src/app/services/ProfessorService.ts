import ProfessorModel from '../models/Professor'

interface IProfessorDTO{
    name: string,
    university: string,
    degree: string
}

class ProfessorService{
    async create({name, university, degree}: IProfessorDTO){
        const data = {
            name,
            university,
            degree
        }
        const Professor = await ProfessorModel.create({name, university, degree})
        return {...data, _id: Professor._id}
    }

    async index(){
        return ProfessorModel.find()
    }
    
    async findById(_id: any){
        const ProfessorSearch = await ProfessorModel.findById(_id)

        if(ProfessorSearch === null) return {error: "Professor não encontrado"}

        return {data: ProfessorSearch}
    }

    async update(_id: any, {name, university, degree}: IProfessorDTO){
        const Professor =  await ProfessorModel.findByIdAndUpdate(_id, {name, university, degree}, {'new': true})
        return {data: `Professor Atualizado!`}
    }

    async delete(_id: any){
        const ProfessorSearch = await ProfessorModel.findById(_id)
        if(ProfessorSearch === null) return {error: 'Professor não encontrado'}
        await ProfessorModel.findByIdAndRemove(_id)
        return {data: 'Professor removido'}
    }
}

export default new ProfessorService