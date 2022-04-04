type IMCProps = {
    peso: number,
    altura: number
}

type aux = number

function calcularIMC(peso: aux, altura: aux): number{
    return peso / (altura ** 2)
}

function situacaoIMC(imc: number){
    
}

export default (props: IMCProps) => {
    return (
        <div>
            <h3>Sua altura é {props.altura}m e seu peso é {props.peso}kg</h3>
            <h3>Seu IMC é {calcularIMC(props.peso, props.altura)}</h3>
        </div>
    )
}