import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navi from './components/Navi';
import Home from './Home';
import Contact from './Contact';
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

  return (
    <Router>
      <div>
        <Navi />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/flashcards" element={<FlashcardList flashcards={flashcards} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
