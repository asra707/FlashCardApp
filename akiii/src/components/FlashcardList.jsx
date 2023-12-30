import React from 'react'
import Flashcard from './Flashcard';
//import './style.css'



export default function FlashcardList({ flashcards }) {  return (
    <div className="grid">
      {flashcards.map(flashcard =>{
        return <Flashcard flashcard ={flashcard} key={flashcard.id} />
      })}
    </div>
  )
}
