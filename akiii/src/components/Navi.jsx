import { NavLink } from 'react-router-dom';
import './Navi.css'; 

export default function Navi() {
  return (
    <div className="Navigation">
      <NavLink to="/" >Home</NavLink>
      <NavLink to="/Contact">Contact Us</NavLink>
      <NavLink to="/flashcards"> Flashcards </NavLink>

    </div>
  );
}
