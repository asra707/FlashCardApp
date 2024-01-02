import React, { useState } from 'react';

export default function EditFlashcard({ flashcard, onEdit, onClose }) {
  const [editedTitle, setEditedTitle] = useState(flashcard.title);
  const [editedContent, setEditedContent] = useState(flashcard.content);

  const handleTitleChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setEditedContent(e.target.value);
  };

  const handleSubmit = () => {
    const editedFlashcard = {
      ...flashcard,
      title: editedTitle,
      content: editedContent,
    };
    onEdit(editedFlashcard);
    onClose();
  };

  return (
    <div className="edit-flashcard">
      <h2>Edit Flashcard!</h2>
      <label>Title:</label>
      <input type="text" value={editedTitle} onChange={handleTitleChange} />
      <label>Content:</label>
      <textarea value={editedContent} onChange={handleContentChange} />
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
}
