interface PersonagemProps{
    nome: string,
    casa: string
}


export default (props: PersonagemProps) => {
    return (
        <div>
            {props.nome} da casa {props.casa}
        </div>
    )
}