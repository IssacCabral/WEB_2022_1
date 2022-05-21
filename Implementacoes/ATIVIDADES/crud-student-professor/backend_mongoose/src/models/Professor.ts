import mongoose from "mongoose";

const ProfessorSchema = new mongoose.Schema({
    name: {type: String, required: true, max: 100},
    university: {type: String, require: true, max: 100},
    degree: {type: String, require: true, max: 50}
})

const ProfessorModel = mongoose.model('professors', ProfessorSchema)

export default ProfessorModel