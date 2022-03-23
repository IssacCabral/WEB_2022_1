import React, { Component } from "react";

class Questao02 extends Component{
    constructor(props){
        super(props)
    }

    render() {
        const {nome, curso, cidade} = this.props
        return (
            <div>
                <h3>Extendendo de Component</h3>
                <h4>Nome: {nome}</h4>
                <h4>Curso: {curso}</h4>
                <h4>Cidade: {cidade}</h4>
            </div>
        )
    }
}

export default Questao02