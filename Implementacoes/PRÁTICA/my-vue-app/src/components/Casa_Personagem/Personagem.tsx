interface IPersonagem{
    name: string
    house?: string
}

const Personagem = (props: IPersonagem) => {
    const {name, house} = props
    return (
        <div>
            <h3>{name} da casa {house}</h3>
        </div>
    )
}

export default Personagem