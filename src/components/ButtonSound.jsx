// Assets
import sound1 from "../assets/sounds/idiota.mp3"
import sound2 from "../assets/sounds/callate.mp3"
import sound3 from "../assets/sounds/vete-al-diablo.mp3"

// Styles
import "./ButtonSound.css"

function ButtonSound({soundType}) {
    
    const playSound = () => {
        if (soundType === 1) {
            new Audio(sound1).play()
        }
        if (soundType === 2) {
            new Audio(sound2).play()
        }
        if (soundType === 3) {
            new Audio(sound3).play()
        }
    }
    
    return (
        <button 
            className="button-sound"
            onClick={() => playSound()}></button>
    )
}

export default ButtonSound