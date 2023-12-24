import React, { useState } from 'react';
import FlashcardList from './components/FlashcardList';
import './style.css'

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE)

  return (
    <FlashcardList flashcards = {flashcards} />
    
  );
}

const SAMPLE =[
  {
      "id": 1,
      "title": "TCP Protocol",
      "category": "Networking",
      "content": "TCP establishes connections between devices before forwarding traffic. It ensures reliable and ordered delivery of segments while controlling data flow to manage limited resources."
  },
  {
    "id": 2,
    "title": "UDP Protocol",
    "category": "Networking",
    "content": "UDP reconstructs data in received order without resending lost segments. It operates without session establishment or informing the sender about resource availability."
  }

]

export default App;
