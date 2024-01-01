import React, { useState } from 'react';

export default function Flashcard({ flashcard, onDelete }) {
  const [flip, setFlip] = useState(false);
  const [showDeleteButton, setShowDeleteButton] = useState(false);

  const handleCardClick = () => {
    setFlip(!flip);
  };

  const handleDelete = () => {
    onDelete(flashcard.id);
  };

  return (
    <div
      className={`card ${flip ? 'flip' : ''}`}
      onClick={handleCardClick}
      onMouseEnter={() => setShowDeleteButton(true)}
      onMouseLeave={() => setShowDeleteButton(false)}
    >

      <div className="fcard">
        <div className="front">
          {flashcard.title}
          {showDeleteButton && (
            <button className="delete-button" onClick={handleDelete}>
              Delete
            </button>
          )}
        </div>

        <div className="back">
          {flashcard.content}
          {showDeleteButton && (
            <button className="delete-button" onClick={handleDelete}>
              Delete
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
