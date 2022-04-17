

const Filho = (props: any) => {
    return (
        <div>
            <button onClick={() => {props.notificarPai('...Tudo bom?')}}>
                Oi pai!
            </button>
        </div>
    )
}

export default Filho