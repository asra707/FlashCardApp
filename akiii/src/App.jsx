import React, { useEffect, useState } from 'react';
import FlashcardList from './components/FlashcardList';
import './style.css';

function App() {
  const [flashcards, setFlashcards] = useState([]);
  const [error, setError] = useState(null);


useEffect(() => {
  fetch('http://localhost:3001/flashcards')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
      return response.json();
    })
    .then((flashcards) => {
      console.log('Received data:', flashcards);
      setFlashcards(flashcards);
    })
    .catch((error) => {
      setError('There was a problem fetching data. Please try again.');
    });
}, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <FlashcardList flashcards={flashcards} />;
}

export default App;
