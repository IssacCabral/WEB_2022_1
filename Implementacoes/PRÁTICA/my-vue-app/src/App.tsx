import './App.css'

import Cities from './components/City/Cities'
import Dados, {IMeusDados} from './components/Dados'

const meusDados: IMeusDados = {
  nome: "Issac",
  idade: 18
}

function App() {
  return (
    <div>
      <Dados props={meusDados}/>
    </div>
  )
}

export default App
