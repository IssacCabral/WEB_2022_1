import './App.css'

import House from './components/House'
import Character from './components/Character'
import Arena from './components/Arena'

function App() {
  return (
    <div className="App">
      <House houseName='Stark'>
        <Character name='Arya' />
        <Character name='Sansa' />
        <Character name='Ned' />
      </House>

      <House houseName='targeryan'>
        <Character name='Arya' />
        <Character name='Matias'/>
        <Arena name='Castelaõ' status='Chovebndo'/>
      </House>
    </div>
  )
}

export default App
