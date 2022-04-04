import React from "react"

export default (props: any) => {
    return (
        <div>
            <h1> {props.casa} </h1>
            {React.Children.map(props.children, personagem => {
                return React.cloneElement(personagem, {...props})
            })}
        </div>
    )
}