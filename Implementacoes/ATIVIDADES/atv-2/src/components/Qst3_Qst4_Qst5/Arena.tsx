import React from "react";
import { FC } from "react";

interface IArenaProps{
    arena: string
}

const Arena: FC<IArenaProps> = (props) => {
    return (
        <div>
            <h1>Arena: {props.arena}</h1>
            {React.Children.map(props.children as React.ReactElement, children => {
                return React.cloneElement(children, {...props})
            })}
        </div>
    )
}

export default Arena