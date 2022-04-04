import HeroEnemyProps from "./HeroEnemyProps"

const Enemy = (props: HeroEnemyProps) => {
    return (
        <div>
            <h3>Nome do inimigo: {props.name}</h3>
            <img src={props.imagePath} width={400} />
        </div>
    )
}

export default Enemy