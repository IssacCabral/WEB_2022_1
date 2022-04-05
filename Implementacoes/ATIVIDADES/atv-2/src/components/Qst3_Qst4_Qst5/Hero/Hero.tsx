import { FC } from "react"
import HeroEnemyProps from "../HeroEnemyProps"
import './style.css'

const Hero: FC<HeroEnemyProps> = (props) => {
    return (
        <div className="card-base hero">
            <h3>Nome do Herói: {props.name}</h3>
            <img src={props.imagePath}/>
        </div>
    )
}

export default Hero