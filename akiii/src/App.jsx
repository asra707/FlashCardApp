import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navi from './components/Navi';
import Home from './Home';
import Contact from './Contact';
import FlashcardList from './components/FlashcardList';
import AddFlashcard from './components/AddFlashcard';
import EditFlashcard from './components/EditFlashcard';
import './style.css';


function App() {
  const [flashcards, setFlashcards] = useState([]);
  const [error, setError] = useState(null);


  useEffect(() => {
    fetchFlashcards();
  }, []);

  const fetchFlashcards = () => {
    fetch('http://localhost:3001/flashcards')
      .then((response) => response.json())
      .then((flashcards) => {
        const sortedFlashcards = flashcards.sort((a, b) => {
          return new Date(b.lastModified) - new Date(a.lastModified);
        });
        setFlashcards(sortedFlashcards);
      })
      .catch((error) => {
        setError('There was a problem fetching data. Please try again.');
      });
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  const addFlashcard = (newFlashcard) => {
    const modifiedFlashcard = {
      ...newFlashcard,
      lastModified: new Date().toISOString(), // Set current date/time
      status: 'Noted', // Set initial status
    };
  
    fetch('http://localhost:3001/flashcards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(modifiedFlashcard),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }
        return response.json();
      })
      .then(() => {
        fetchFlashcards();
      })
      .catch((error) => {
        setError('There was a problem adding the flashcard. Please try again.');
      });
  };


  
  const deleteFlashcard = (id) => {
    fetch(`http://localhost:3001/flashcards/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }
        return response.json();
      })
      .then(() => {
        fetchFlashcards();
      })
      .catch((error) => {
        setError('There was a problem deleting the flashcard. Please try again.');
      });
  };


  
  const editFlashcard = (editedFlashcard) => {
    const modifiedFlashcard = {
      ...editedFlashcard,
      lastModified: new Date().toISOString(), // Update modification date/time
    };
  
    fetch(`http://localhost:3001/flashcards/${editedFlashcard.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(modifiedFlashcard),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }
        return response.json();
      })
      .then(() => {
        fetchFlashcards();
      })
      .catch((error) => {
        setError('There was a problem editing the flashcard. Please try again.');
      });
};
 

  return (
    <Router>
      <div>
        <Navi />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/flashcards" element={ <>
            <AddFlashcard addFlashcard={addFlashcard} />
            <FlashcardList 
              flashcards={flashcards}  
              onDelete={deleteFlashcard}
              onEdit={editFlashcard} 

            /> 
            </>
          
            } 
          />
          <Route
  path="/flashcards/:id/edit"
  element={<EditFlashcard flashcards={flashcards} onEdit={editFlashcard} />}
/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
