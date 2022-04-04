import { Component } from "react"

type IMCProps = {
    peso: number,
    altura: number
}

class IMC extends Component{

    constructor(props: any){
        super(props)
    }

    private meuTitulo(){
        return (
            <h1>Cálculo de IMC</h1>
        )
    }

    private calcularIMC(peso: number, altura: number){
        return peso/(altura**2)
    }

    private resultado(imc: number){
        if (imc < 17) {
            return <h3>Muito Abaixo do Peso</h3>
        }else if (imc >= 17 && imc < 18.5) {
            return <h3>Abaixo do Peso</h3>
        }else if (imc >= 18.5 && imc < 25) {
            return <h3>Peso Saudável</h3>
        }else if (imc >= 25 && imc < 30) {
            return <h3>Acima do Peso</h3>
        }else if (imc >= 30 && imc < 35) {
            return <h3>Obesidade I</h3>
        }else if (imc >= 35 && imc < 40) {
            return <h3>Obesidade II</h3>
        }else {
            return <h3>Obesidade III</h3>
        }
    }

    render(){
        const {peso, altura} = this.props
        const imc = this.calcularIMC(peso, altura)

        return(
            <div>
                {this.meuTitulo()}
                <h3>
                    A minha altura é {altura} e o meu peso é {peso}
                </h3>
                <h3>
                    O meu IMC é {imc.toFixed(2)}
                </h3>
                {this.resultado(imc)}
            </div>
        )
    }
}

export default IMC