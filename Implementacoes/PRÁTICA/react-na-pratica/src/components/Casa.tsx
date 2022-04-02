import Personagem from "./Personagem";

export default (props:any) => {
    return (
        <div>
            <h1> {props.children} </h1>
        </div>
    )
}