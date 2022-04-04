import HeroEnemyProps from "./HeroEnemyProps"

const Hero = (props: HeroEnemyProps) => {
    return (
        <div>
            <h3>Nome do Herói: {props.name}</h3>
            <img src={props.imagePath} width={300} height={150}/>
        </div>
    )
}

export default Hero