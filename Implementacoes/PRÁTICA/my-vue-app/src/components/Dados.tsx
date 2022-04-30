interface IMeusDados{
    nome: string,
    idade: number
}

const Dados = ({props}: IMeusDados) => {
    return (
        <div>
            <h1>Olá {props.nome}</h1>
            <h1>Você tem {props.idade}</h1>
        </div>
    )
}

export default Dados
export type {IMeusDados}