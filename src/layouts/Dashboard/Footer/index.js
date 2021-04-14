import React from 'react';
import './Footer.css';
import { Hidden } from '@material-ui/core';

function Footer() {
  return (
    <div class='Footer'>
      <Hidden smDown>
        <div class='container'>
          <h2>Getting Started</h2>
          <h2>Explore Degree Plans</h2>
          <h2>Transfer Options</h2>
          <h2>Tools</h2>
          <h2>Login</h2>
        </div>
      </Hidden>
    </div>
  );
}

export default Footer;
