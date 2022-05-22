import axios from 'axios'
import {Link} from 'react-router-dom'

interface IStudent{
    _id: number,
    name: string,
    course: string,
    ira: number,
    deleteStudentById: any
}

const StudentTableRow = (student: IStudent) => {
    const {_id, name, course, ira} = student

    function deleteStudent(){
        if(window.confirm(`Deseja excluir o elemento de ID: ${_id}`)){
            axios.delete(`http://localhost:8080/crud/students/delete/${_id}`)
            .then((response) => {student.deleteStudentById(_id)})
            .catch(err => console.log(err))
        }
    }

    return (
            <tr>
                <td>
                    {_id}
                </td>
                <td>
                    {name}
                </td>
                <td>
                    {course}
                </td>
                <td>
                    {ira}
                </td>
                <td>
                    <Link to={`/crud/editStudent/${_id}`} className="btn btn-primary">Editar</Link>
                </td>
                <td style={{textAlign: "center"}}>
                    <button className='btn btn-danger' onClick={deleteStudent}>Apagar</button>
                </td>
            </tr>
    )
}

export default StudentTableRow
export type {IStudent}