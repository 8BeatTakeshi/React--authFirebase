import React from 'react';
import { useDispatch } from 'react-redux';

import './Navbar.css';

function Navbar() {
  const dispatch = useDispatch();

  const toggleSignIn = () => {
    dispatch({
      type: 'TOGGLEIN',
    });
  };

  const toggleSignUp = () => {
    dispatch({
      type: 'TOGGLEUP',
    });
  };

  return (
    <div className="navbar-container">
      <button onClick={toggleSignIn}>Connexion</button>
      <button onClick={toggleSignUp}>Inscription</button>
    </div>
  );
}

export default Navbar;
