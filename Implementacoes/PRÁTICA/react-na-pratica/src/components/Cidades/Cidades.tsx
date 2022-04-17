import { useEffect, useState } from "react"
import './style.css'

const Cidades = () => {
    let [countFortal, setFortal] = useState<number>(0)
    let [countQuixa, setQuixa] = useState<number>(0)
    let [favorite, setFavorite] = useState<string>('-')

    function alterFortal(){
        setFortal(++countFortal)
    }
    function alterQuixa(){
        setQuixa(++countQuixa)
    }
    function zerar(){
        setFortal(0)
        setQuixa(0)
        setFavorite('-')
    }

    useEffect(() => {
        if(countFortal > countQuixa){
            setFavorite('Fortaleza')
        }else if(countQuixa > countFortal){
            setFavorite('Quixadá')
        }
    })

    return (
        <div>
            <h3>Fortaleza: {countFortal}</h3>
            <h3>Quixadá: {countQuixa}</h3>
            <h3>Mais votada: {favorite}</h3>


            <button onClick={alterFortal} className="botao">Fortaleza</button>
            <button onClick={alterQuixa} className="botao">Quixadá</button> <br />
            <button onClick={zerar} className="botao-zerar">Zerar</button>
        </div>
    )
}

export default Cidades