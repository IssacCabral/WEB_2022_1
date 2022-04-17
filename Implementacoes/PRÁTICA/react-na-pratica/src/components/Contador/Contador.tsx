import { useState, useEffect } from "react"

export default () => {
    let [count, setCount] = useState<number>(0)
    let [status, setStatus] = useState('par')

    function alterCount(){
        setCount(++count)
    }
    
    useEffect(() => {
        if(count % 2 == 0){
            setStatus('par')
        }else{
            setStatus('ímpar')
        }
    }, [count])

    return (
        <div>
            <h1>Contador: {count}</h1>
            <h1>Status: {status}</h1>
            <button onClick={alterCount}>Incrementa</button>
        </div>
    )
}

