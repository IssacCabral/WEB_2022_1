
const Filho = (props: any) => {
    return (
        <div>
            <button onClick={() => {props.notificarPai('Tudo bom papai?')}}>
                Oi pai
            </button>
        </div>
    )
}

export default Filho