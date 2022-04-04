import './App.css'

import World from './components/Qst3_Qst4/World'
import Arena from './components/Qst1_Qst2/Arena'

import Casa from './components/Qst3_Qst4/Casa'
import Personagem from './components/Qst3_Qst4/Personagem'

function App() {
  return (
    <div className="App">
      <Casa casa="Stark">
        <Personagem nome="Arya"/>
        <Personagem nome="Ned"/>
      </Casa>

      <Casa casa="Baratheon">
        <Personagem nome="Theon" casa="baratheon"/>
      </Casa>

    </div>
  )
}

export default App
