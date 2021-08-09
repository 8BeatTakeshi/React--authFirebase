import React from 'react';

import Navbar from '../../Components/Navbar/Navbar';
import SignUp from '../../Components/AuthForm/SignUp';
import SignIn from '../../Components/AuthForm/SignIn';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-content-container">
        <h1>Bienvenue sur le site.</h1>
        <p>Authentifiez-vous pour accéder au fonctionnalités.</p>
      </div>
      {/* <SignUp />
      <SignIn /> */}
    </div>
  );
}

export default Home;
