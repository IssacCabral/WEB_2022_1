import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import ProfessorTableRow, {IProfessor} from "./ProfessorTableRow";

const ListProfessor = () => {
    const [professors, setProfessors] = useState<IProfessor[]>([]) 

    useEffect(
        () => {
            axios.get("http://localhost:8080/crud/professors/list")
                .then(
                    (res) => {
                        setProfessors(res.data)
                    }
                )
                .catch(
                    (error) => {
                        console.log(error)
                    }
                )
        }
        ,
        []
    )

    function deleteProfessorById(id: number){
        let professorsTemp = professors
        for(let i = 0; i < professorsTemp.length; i++){
            if(professorsTemp[i].id === id){
                professorsTemp.splice(i, 1)
            }
        }
        setProfessors([...professorsTemp])
    }

    function generateTable(){
        if(!professors) return
        return professors.map((professor, i) => {
            return <ProfessorTableRow id={professor.id} name={professor.name} university={professor.university} degree={professor.degree} key={i} deleteProfessorById={deleteProfessorById} />
        })
    }

    return (
        <div>
            <main>
                <h2>List Professors</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Universidade</th>
                            <th>Ocupação</th>
                            <th colSpan={2} style={{textAlign:"center"}}>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {generateTable()}
                    </tbody>
                </table>
            </main>
            <nav>
                <Link to={'/'}>Home</Link>
            </nav>
        </div>
    )
}

export default ListProfessor