interface PersonagemProps{
    nome: string,
    casa: string
}

export default (props: any) => {
    return (
        <div>
            {props.nome} da casa {props.casa}
        </div>
    )
}