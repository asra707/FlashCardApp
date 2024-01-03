import React, { useState } from 'react';
import Flashcard from './Flashcard';

export default function FlashcardList({
  flashcards,
  searchTerm,
  filterStatus,
  onDelete,
  onEdit,
}) {
  const [sortCriteria, setSortCriteria] = useState(null);

  const filteredFlashcards = flashcards.filter((flashcard) => {
    const matchesSearchTerm =
      flashcard.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      flashcard.content.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatusFilter =
      filterStatus === '' || flashcard.status === filterStatus;

    return matchesSearchTerm && matchesStatusFilter;
  });

  const sortFlashcards = (criteria, flashcardsToSort) => {
    let sortedFlashcards = [...flashcardsToSort];

    switch (criteria) {
      case 'lastModified':
        sortedFlashcards.sort(
          (a, b) => new Date(b.lastModified) - new Date(a.lastModified)
        );
        break;
      case 'title':
        sortedFlashcards.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'content':
        sortedFlashcards.sort((a, b) => a.content.localeCompare(b.content));
        break;
      case 'status':
        sortedFlashcards.sort((a, b) => a.status.localeCompare(b.status));
        break;
      default:
        break;
    }

    return sortedFlashcards;
  };

  const handleSortChange = (e) => {
    const selectedCriteria = e.target.value;
    setSortCriteria(selectedCriteria);
  };

  const sortedFlashcards = sortFlashcards(
    sortCriteria || 'lastModified',
    filteredFlashcards
  );

  return (
    <div className="list">
      <div className="contain">
        <label htmlFor="sort">Sort by: </label>
        <select
          id="sort"
          onChange={handleSortChange}
          value={sortCriteria || ''}
        >
          <option value="">None</option>
          <option value="lastModified">Last Modified</option>
          <option value="title">Title</option>
          <option value="content">Content</option>
          <option value="status">Status</option>
        </select>
      </div>
      {sortedFlashcards.map((flashcard) => (
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
