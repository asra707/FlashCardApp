import { NavLink } from 'react-router-dom';
import './Navi.css'; 

export default function Navi() {
  return (
    <div className="Navigation">
      <NavLink to="/FlashCardApp" >Home</NavLink>
      <NavLink to="/Contact">Contact Me</NavLink>
      <NavLink to="/flashcards"> Flashcards </NavLink>

    </div>
  );
}
