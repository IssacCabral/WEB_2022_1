import React, {ReactElement} from 'react'

interface IHouse{
    houseName: string
    children?: React.ReactNode
}

const House = (props: IHouse) => {
    return (
        <div>
            <h1>Casa {props.houseName}</h1>

            {React.Children.map(props.children as React.ReactElement, children => {
                return React.cloneElement(children, {house: props.houseName})
            })}
        </div>
    )
}

export default House