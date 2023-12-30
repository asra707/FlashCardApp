import React, { useState } from 'react';


export default function Flashcard({ flashcard }) {
  const [flip, setFlip] = useState(false);


  const handleCardClick = () => {
    setFlip(!flip);
  };


  return (
    <div
      className={`card ${flip ? 'flip' : ''}`}
      onClick={handleCardClick}
    >
      <div className="fcard">
      <div className="front">
        {flashcard.title}
      </div>


      <div className="back">
        {flashcard.content}
      </div>


      </div>
    </div>
  );
}
