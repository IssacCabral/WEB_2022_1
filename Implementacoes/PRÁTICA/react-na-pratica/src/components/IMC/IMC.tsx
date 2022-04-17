interface IImc{
    weight: number,
    height: number
}

const Imc = (props: IImc) => {
    function calculateImc(weight: number, height: number){
        return weight/(height ** 2)
    }
    
    const {weight, height} = props
    return (
        <div>
            <h3>Your height: {height}, your weight: {weight} </h3>
            <h3>Your IMC: {calculateImc(weight, height)}</h3>
        </div>
    )
}

export default Imc