import React, { useEffect, useState } from 'react';
import FlashcardList from './components/FlashcardList';
import './style.css';

function App() {
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    fetch('/database.json') // Fetch from the public folder
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setFlashcards(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return <FlashcardList flashcards={flashcards} />;
}

export default App;
