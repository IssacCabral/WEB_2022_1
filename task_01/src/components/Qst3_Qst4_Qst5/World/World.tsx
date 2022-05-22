import { FC } from "react"
import './style.css'

const World: FC = (props) => {
    return (
        <div className="container">
            <div className="World">
                {props.children}
            </div>
        </div>
    )
}

export default World