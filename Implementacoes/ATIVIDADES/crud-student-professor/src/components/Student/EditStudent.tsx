import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditStudent = () => {
    const [name, setName] = useState<string>("")
    const [course, setCourse] = useState<string>("")
    const [ira, setIra] = useState<any>(0)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(
        () => {
            axios.get('http://localhost:8080/crud/students/find/' + params.id)
                .then(
                    (res) => {
                        setName(res.data.name)
                        setCourse(res.data.course)
                        setIra(res.data.ira)
                    }
                )
                .catch(
                    (error) => {
                        console.log(error)
                    }
                )

        }
        ,
        [params.id]
    )

    const handleSubmit = (event: any) => {
        event.preventDefault()
        const updatedStudent = {
            name,
            course,
            ira
        }
        axios.put('http://localhost:8080/crud/students/update/' + params.id, updatedStudent)
            .then(
                res => {
                    navigate("/crud/listStudents")
                }
            )
            .catch(error => console.log(error))
    }

    return (
        <>
            <main>
                <h2>
                    Editar Estudante
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Nome: </label>
                        <input type="text"
                            className="form-control"
                            value={(name == null || name === undefined) ? "" : name}
                            name="name"
                            onChange={(event) => { setName(event.target.value) }} />
                    </div>
                    <div className="form-group">
                        <label>Curso: </label>
                        <input type="text"
                            className="form-control"
                            value={course ?? ""}
                            name="course"
                            onChange={(event) => { setCourse(event.target.value) }} />
                    </div>
                    <div className="form-group">
                        <label>IRA: </label>
                        <input type="text"
                            className="form-control"
                            value={ira ?? 0}
                            name="ira"
                            onChange={(event) => { setIra(event.target.value) }} />
                    </div>
                    <div className="form-group" style={{ paddingTop: 20 }}>
                        <input type="submit" value="Atualizar Estudante" className="btn btn-primary" />
                    </div>
                </form>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    )
}

export default EditStudent