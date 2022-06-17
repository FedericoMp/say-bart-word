// Components
import ButtonSound from "./components/ButtonSound"

// Assets
import speaker from "./assets/img/speaker.png"

// Styles
import "./App.css"

function App() {

  return (
    <div className="app">
      <h1 className="title">Say-Bart-Word</h1>
      <div className="button-container">
        <ButtonSound soundType={1}/>
        <ButtonSound soundType={2}/>
        <ButtonSound soundType={3}/>
      </div>
      <img src={speaker} alt="Speaker" className="speaker"/>
    </div>
  )
}

export default App
