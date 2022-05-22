import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import StudentTableRow, {IStudent} from "./StudentTableRow";

const ListStudent = () => {
    const [students, setStudents] = useState<IStudent[]>([])
    
    useEffect(
        () => {
            axios.get("http://localhost:8080/crud/students/list")
                .then(
                    (res) => {
                        setStudents(res.data)
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

    function deleteStudentById(_id: number){
        let studentsTemp = students
        for(let i = 0; i < studentsTemp.length; i++){
            if(studentsTemp[i]._id === _id){
                studentsTemp.splice(i, 1)
            }
        }
        setStudents([...studentsTemp])
    }

    function generateTable(){
        if(!students) return
        return students.map((student, i) => {
            return <StudentTableRow _id={student._id} name={student.name} course={student.course} ira={student.ira} key={i} deleteStudentById={deleteStudentById} />
        })
    }

    return (
        <div>
            <main>
                <h2>List Student</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Curso</th>
                            <th>IRA</th>
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

export default ListStudent