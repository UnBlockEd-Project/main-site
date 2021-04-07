import React from 'react';
import './Header.css';
import logo from "./logo.svg";

function Header() {
  return (
    <div class="Header">
      <div class="container">
        <img class="logo" src={logo} alt="Logo" />
        <h2>Getting Started</h2>
        <h2>Explore Degree Plans</h2>
        <h2>Transfer Options</h2>
        <h2>Tools</h2>
        <h2>Login</h2>
      </div>
    </div>
  )
}

export default Header;