import axios from 'axios'
import { Link } from 'react-router-dom'

interface IProfessor {
    _id: number,
    name: string,
    university: string,
    degree: string,
    deleteProfessorById: any
}

const ProfessorTableRow = (professor: IProfessor) => {
    const { _id, name, university, degree } = professor

    function deleteProfessor(){
        if(window.confirm(`Deseja excluir o elemento de ID:${_id}?`)){
            axios.delete(`http://localhost:8080/crud/professors/delete/${_id}`)
            .then((response) => {professor.deleteProfessorById(_id)})
            .catch((err) => console.log(err))
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
                {university}
            </td>
            <td>
                {degree}
            </td>

            <td>
                <Link to={`/crud/editProfessor/${_id}`} className="btn btn-primary">Editar</Link>
            </td>
            <td style={{ textAlign: "center" }}>
                <button className='btn btn-danger' onClick={deleteProfessor}>Apagar</button>
            </td>
        </tr>
    )
}

export default ProfessorTableRow
export type {IProfessor}