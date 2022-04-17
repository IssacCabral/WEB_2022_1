interface ICharacter{
    name: string,
    house?: string
}

const Character = (props: ICharacter) => {
    return (
        <div>
            {props.name} from house {props.house}
        </div>
    )
}

export default Character
export type {ICharacter}