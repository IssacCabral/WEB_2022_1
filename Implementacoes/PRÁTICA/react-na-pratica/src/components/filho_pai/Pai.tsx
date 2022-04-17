import Filho from "./Filho"

const Pai = () => {
    const msgRecebida = (msg: string) => {
        alert(`Recebi ${msg}`)
    }
    return (
        <div>
            <Filho notificarPai={msgRecebida}/>
        </div>
    )
}

export default Pai