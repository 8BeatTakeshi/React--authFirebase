import React, { useContext } from 'react';

import Navbar from '../../Components/Navbar/Navbar';
import SignUp from '../../Components/AuthForm/SignUp';
import SignIn from '../../Components/AuthForm/SignIn';
import { AuthContext } from '../../context/AuthContext';
import '../Home/Home.css';

const PrivateHome = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div className="home-container">
      <Navbar />
      <SignUp />
      <SignIn />

      <div className="home-content-container">
        <h1>Voici votre compte privé.</h1>
        <p>Amusez-vous bien!</p>
        <button onClick={logout}>Se déconnecter</button>
      </div>
    </div>
  );
};

export default PrivateHome;
