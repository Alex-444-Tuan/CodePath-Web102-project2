import { useState } from 'react'
import './App.css'
import Flashcard from './components/Flashcard'
import card from './data.json'

function App() {
  const [index, setIndex] = useState(0)
  const [flip, setFlip] = useState(false)

  const handleFlip = () => {
    setFlip(!flip)
  }
  const handleIndex = () => {
    setIndex(Math.floor(Math.random() * card.length))
    setFlip(false)
  }

  return (
    <>
    <div className="flashcard-container">
      <h1 className="title">Vietnamese to English Slang</h1>
      <p className="description">Flip, Learn, Connect – Unlock the Fun of Slang!</p>
      <Flashcard card={card[index]} flipped={flip} onClick={handleFlip} />
      <button className="next-button" onClick={handleIndex}>Next</button>
    </div>
  </>
  
  )
}

export default App
