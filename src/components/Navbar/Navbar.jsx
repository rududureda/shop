import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

function Navbar() {
  return (
    <nav className="nav-container">
      <h1>My shop</h1>
      <ul>
        <li>
          <NavLink to="/">All items</NavLink>
        </li>
        <li>
          <NavLink to="/my-card">My Cart</NavLink>
        </li>
        <li>
          <NavLink to="/favorites">Favorite</NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
