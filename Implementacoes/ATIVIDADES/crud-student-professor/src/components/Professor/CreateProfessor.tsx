import React, {useState} from "react"
import axios from "axios"

const CreateProfessor = () => {
    const [name, setName] = useState<string>('')
    const [university, setUniversity] = useState<string>('')
    const [degree, setDegree] = useState<string>('Graduado')

    function alterName(event: any){
        setName(event.target.value)
    }

    function alterUniversity(event: any){
        setUniversity(event.target.value)
    }

    function alterDegree(event: any){
        setDegree(event.target.value)
    }

    async function onSubmit(event: any){
        event.preventDefault()

        const newProfessor = {name, university, degree}

        const result: any = await axios.post("http://localhost:8080/crud/professors/create", newProfessor)

        result ? console.log(result) : console.log(result.data.id)

        setName('')
        setUniversity('')
        setDegree('Graduado')
    }

    return (
        <div style={{marginTop: 10}}>
            <h3>Criar Professor</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Nome</label>
                    <input type="text" 
                           className="form-control"
                           value={(name==null || name==undefined)? "" : name}
                           name="name"
                           onChange={alterName}/>
                </div>

                <div className="form-group">
                    <label>Universidade</label>
                    <input type="text" 
                           className="form-control"
                           value={(university==null || university==undefined)? "" : university}
                           name="university"
                           onChange={alterUniversity}/>
                </div>

                <div className="form-group">
                    <label>Titulação</label>
                    <input type="text" 
                           className="form-control"
                           value={(degree==null || degree==undefined)? "" : degree}
                           name="degree"
                           onChange={alterDegree}/>
                </div>

                <div className="form-group" style={{marginTop: 10}}>
                    <input type="submit" value="Criar" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
}

export default CreateProfessor