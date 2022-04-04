import './App.css'
import Casa from './components/Casa'
import Personagem from './components/Personagem'
import Herois from './components/Herois'
import IMC from './components/IMC'


function App() {
  return (
    <div className="App">
      <IMC peso={75} altura={1.77}/>
    </div>
  )
}

export default App
