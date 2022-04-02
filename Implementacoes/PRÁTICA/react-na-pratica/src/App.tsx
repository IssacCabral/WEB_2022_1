import './App.css'
import Casa from './components/Casa'
import Personagem from './components/Personagem'

function App() {
  return (
    <div className="App">
      <Casa> 
        <Personagem nome="Arya" casa="Stark"/>
      </Casa>
    </div>
  )
}

export default App
