import React from 'react';

import logo from '../assets/sportsee-logo.png';
import '../styles/navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar-container">
      <img className="sportsee-logo" src={logo} alt="Sportsee logo"></img>
      <div className="nav-items">
        <div className="link">Accueil</div>
        <div className="link">Profil</div>
        <div className="link">Réglage</div>
        <div className="link">Communauté</div>
      </div>
    </nav>
  );
}
