import axios from 'axios'
import { Link } from 'react-router-dom'

interface IProfessor {
    id: number,
    name: string,
    university: string,
    degree: string,
    deleteProfessorById: any
}

const ProfessorTableRow = (professor: IProfessor) => {
    const { id, name, university, degree } = professor

    function deleteProfessor(){
        if(window.confirm(`Deseja excluir o elemento de ID:${id}?`)){
            axios.delete(`http://localhost:3001/professors/${id}`)
            .then((response) => {professor.deleteProfessorById(id)})
            .catch((err) => console.log(err))
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
                {university}
            </td>
            <td>
                {degree}
            </td>

            <td>
                <Link to={`/editProfessor/${id}`} className="btn btn-primary">Editar</Link>
            </td>
            <td style={{ textAlign: "center" }}>
                <button className='btn btn-danger' onClick={deleteProfessor}>Apagar</button>
            </td>
        </tr>
    )
}

export default ProfessorTableRow
export type {IProfessor}