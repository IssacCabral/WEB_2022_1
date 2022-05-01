import React, {useState} from "react"
import { Link } from "react-router-dom"
import axios, { Axios, AxiosResponse, AxiosResponseHeaders } from "axios"

const CreateStudent = () => {
    const [name, setName] = useState<string>('')
    const [course, setCourse] = useState<string>('')
    const [ira, setIra] = useState<number>(0)

    function alterName(event: any){
        setName(event.target.value)
    }

    function alterCourse(event: any){
        setCourse(event.target.value)
    }

    function alterIra(event: any){
        setIra(event.target.value)
    }

    async function onSubmit(event: any){
        event.preventDefault()

        const newStudent = {name: name, course: course, ira: ira}

        const result: any = await axios.post("http://localhost:8080/crud/students/create", newStudent)

        result ? console.log(result) : console.log(result.data.id)
        
        setName('')
        setCourse('')
        setIra(0)
    }

    return (
        <div style={{marginTop: 10}}>
            <h3>Criar Estudante</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Nome: </label>
                    <input type="text" 
                           className="form-control"
                           value={(name==null || name==undefined)? "" : name}
                           name="name"
                           onChange={alterName}/>
                </div>

                <div className="form-group">
                    <label>Curso: </label>
                    <input type="text"
                           className="form-control"
                           value={(course==null || course==undefined)? "" : course}
                           name="course"
                           onChange={alterCourse}/>
                </div>

                <div className="form-group">
                    <label>IRA: </label>
                    <input type="text"
                           className="form-control"
                           value={(ira==null || ira==undefined)? "" : ira}
                           name="ira"
                           onChange={alterIra}/>
                </div>

                <div className="form-group" style={{marginTop: 10}}>
                    <input type="submit" value="Criar" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
}

export default CreateStudent