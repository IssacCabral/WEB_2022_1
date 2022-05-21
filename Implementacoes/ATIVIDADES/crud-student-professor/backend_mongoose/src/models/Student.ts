import mongoose from "mongoose"

const StudentSchema = new mongoose.Schema({
    name: {type: String, required: true, max: 100},
    course: {type: String, required: true, max: 100},
    ira: {type: Number, required: true}
})

/**Criando modelo a partir do schema acima, o qual servirá para incluir
 * as instâncias 
 */
const StudentModel = mongoose.model('students', StudentSchema)

export default StudentModel