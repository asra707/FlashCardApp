import React, { useState } from 'react';
import './EditFlashcard.css';

export default function EditFlashcard({ flashcard, onEdit, onClose }) {
  const [editedTitle, setEditedTitle] = useState(flashcard.title);
  const [editedContent, setEditedContent] = useState(flashcard.content);
  const [editedStatus, setEditedStatus] = useState(flashcard.status);

  const handleTitleChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setEditedContent(e.target.value);
  };

  const handleStatusChange = (e) => {
    setEditedStatus(e.target.value);
  };

  const handleSubmit = () => {
    const editedFlashcard = {
      ...flashcard,
      title: editedTitle,
      content: editedContent,
      status: editedStatus,
    };
    onEdit(editedFlashcard);
    onClose();
  };

  return (
    <div className="idk">
      <div className="edit-flashcard">
        <h2>Edit Flashcard!</h2>
        <label>Title:</label>
        <input type="text" value={editedTitle} onChange={handleTitleChange} />
        <label>Content:</label>
        <textarea value={editedContent} onChange={handleContentChange} />
        <label>Status:</label>
        <select value={editedStatus} onChange={handleStatusChange}>
          <option value="Learned">Learned</option>
          <option value="Want to Learn">Want to Learn</option>
          <option value="Noted">Noted</option>
        </select>
        <div className="button-container">
          <button className="save-button" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
