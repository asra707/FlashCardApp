import React from 'react';
import Flashcard from './Flashcard';

export default function FlashcardList({ flashcards, onDelete, onEdit }) {
  return (
    <div className="list">
      {flashcards.map((flashcard) => (
        <Flashcard
          flashcard={flashcard}
          key={flashcard.id}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}


    </div>
  );
}
