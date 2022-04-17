interface IArena{
    name: string,
    status: string
}

const Arena = (props: IArena) => {
    return (
        <div>
            <h4>Arena: {props.name} Status: {props.status}</h4>
        </div>
    )
}

export default Arena