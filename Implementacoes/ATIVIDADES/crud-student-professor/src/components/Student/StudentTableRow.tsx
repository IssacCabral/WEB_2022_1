import axios from 'axios'
import React from 'react'
import {Link} from 'react-router-dom'

interface IStudent{
    id: number,
    name: string,
    course: string,
    ira: number,
    deleteStudentById: any
}

const StudentTableRow = (student: IStudent) => {
    const {id, name, course, ira} = student

    function deleteStudent(){
        if(window.confirm(`Deseja excluir o elemento de ID: ${id}`)){
            axios.delete(`http://localhost:3001/students/${id}`)
            .then((response) => {student.deleteStudentById(id)})
            .catch(err => console.log(err))
        }
    }

    return (
            <tr>
                <td>
                    {id}
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
                    <Link to={`/editStudent/${id}`} className="btn btn-primary">Editar</Link>
                </td>
                <td style={{textAlign: "center"}}>
                    <button className='btn btn-danger' onClick={deleteStudent}>Apagar</button>
                </td>
            </tr>
    )
}

export default StudentTableRow
export type {IStudent}