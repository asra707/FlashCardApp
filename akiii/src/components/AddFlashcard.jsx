import React, { useState } from 'react';
import './AddFlashcard.css';

export default function AddFlashcard({ addFlashcard }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== '' && content.trim() !== '') {
      addFlashcard({ title, content });
      setTitle('');
      setContent('');
    }
  };

  return (
    <div className="create">
      <h2>Add Flashcard</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
        <button type="submit">Add Flashcard</button>
      </form>
    </div>
  );
}
