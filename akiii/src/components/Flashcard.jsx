import React, { useState } from 'react';
import EditFlashcard from './EditFlashcard';

export default function Flashcard({ flashcard, onDelete, onEdit }) {
  const [flip, setFlip] = useState(false);
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const handleCardClick = () => {
    setFlip(!flip);
  };

  const handleDelete = () => {
    onDelete(flashcard.id);
  };

  const handleEdit = () => {
    setShowEdit(true);
  };

  const handleCloseEdit = () => {
    setShowEdit(false);
  };
 
  return (
    <div
      className={`card ${flip ? 'flip' : ''}`}
      onClick={handleCardClick}
      onMouseEnter={() => {
        setShowDeleteButton(true);
      }}
      onMouseLeave={() => {
        setShowDeleteButton(false);
      }}
    >

      <div className="fcard">
        <div className="front">
          {flashcard.title}
          {showDeleteButton && (
            <button className="delete-button" onClick={handleDelete}>
              Delete
            </button>
          )}
          {showDeleteButton && (
            <button className="edit-button" onClick={handleEdit}>
              Edit
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
      
      {showEdit && (
        <div className="edit-overlay">
          <div className="edit-popup">
            <EditFlashcard
              flashcard={flashcard}
              onEdit={onEdit}
              onClose={handleCloseEdit}
            />
          </div>
        </div>
      )}
    </div>
  );
}
