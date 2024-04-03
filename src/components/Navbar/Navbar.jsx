import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import User from '../User/User';
import './Navbar.scss';
import AdminUser from '../AdminUser/AdminUser';

function Navbar() {
  const { token } = useAuth();
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
        {token && (
          <li>
            <NavLink to="/admin">Admin</NavLink>
          </li>
        )}
      </ul>
      {/* <User /> */}
      <AdminUser />
    </nav>
  );
}
export default Navbar;
