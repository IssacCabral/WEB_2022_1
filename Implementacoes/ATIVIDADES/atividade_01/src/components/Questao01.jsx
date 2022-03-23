import React from 'react'

const Questao01 = (props) => {
    const {nome, curso, cidade} = props
    return <div>
        <h3>Usando Arrow Function</h3>
        <h4>Nome: {nome}</h4>
        <h4>Curso: {curso}</h4>
        <h4>Cidade: {cidade}</h4>
    </div>
}

// function Questao01(){
//     return <div>
//         <h4>Nome: Issac</h4>
//         <h4>Curso: Sistemas de Informação</h4>
//         <h4>Cidade: Quixadá</h4>
//     </div>
// }

export default Questao01