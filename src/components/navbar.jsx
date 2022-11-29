import React from 'react';

import logo from '../assets/sportsee-logo.png';
import '../styles/navbar.css';

/**
 * Function that displays the navbar
 *
 * @return {React.ReactElement} A React component.
 */

export default function Navbar() {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="nav-items">
          <img className="sportsee-logo" src={logo} alt="Sportsee logo"></img>
          <div className="link">Accueil</div>
          <div className="link">Profil</div>
          <div className="link">Réglage</div>
          <div className="link">Communauté</div>
        </div>
      </nav>
    </div>
  );
}
