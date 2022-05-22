import Arena from './components/Qst3_Qst4_Qst5/Arena/Arena'
import Hero from './components/Qst3_Qst4_Qst5/Hero/Hero'
import Enemy from './components/Qst3_Qst4_Qst5/Enemy/Enemy'
import World from './components/Qst3_Qst4_Qst5/World/World'

import ImagePaths from './components/Qst3_Qst4_Qst5/ImagePaths'

function App() {
  return (
    <div className="App">
      <World>
        <Arena arena="Tokio Dome- Underground Arena">
          <Hero name='Baki' imagePath={ImagePaths[0]} />
          <Enemy name='Yujiro' imagePath={ImagePaths[1]}></Enemy>
        </Arena>

        <Arena arena="Vila da Folha">
          <Hero name='Narutinho' imagePath={ImagePaths[2]} />
          <Enemy name='Sasuke' imagePath={ImagePaths[3]}></Enemy>
        </Arena>

        <Arena arena="Arena Castelão">
          <Hero name='Fortaleza' imagePath={ImagePaths[4]} />
          <Enemy name='Ceará' imagePath={ImagePaths[5]}></Enemy>
        </Arena>
      </World>

    </div>
  )
}

export default App
