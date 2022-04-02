type HeroProps = {
    nome: string
}

export default (props: HeroProps) => {
    return <h1>Olá Meu caro {props.nome} </h1>
}