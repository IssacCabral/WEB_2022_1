import { FC } from "react"
import HeroEnemyProps from "../HeroEnemyProps"
import './style.css'

const Enemy: FC<HeroEnemyProps> = (props) => {
    return (
        <div className="card-base enemy">
            <h3>Nome do inimigo: {props.name}</h3>
            <img src={props.imagePath}/>
            <h4>lutando na arena {props.arena}</h4>
        </div>
    )
}

export default Enemy