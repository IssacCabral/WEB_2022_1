import React, { FC } from "react";
import './style.css'

interface IArenaProps {
    arena: string
}

const Arena: FC<IArenaProps> = (props) => {
    return (
        <div className="arena">
            <h2>Arena: {props.arena}</h2>
            <div className="fight">
                {React.Children.map(props.children as React.ReactElement, children => {
                    return React.cloneElement(children, { arena: props.arena })
                })}
            </div>

        </div>
    )
}

export default Arena