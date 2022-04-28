import Filho from "./Filho"

const Pai = () => {
    const msgRecebida = (message: string) => {
        alert(`Recebi: ${message}`)
    }
    return (
        <div>
            <Filho notificarPai={msgRecebida}/>
        </div>
    )
}

export default Pai