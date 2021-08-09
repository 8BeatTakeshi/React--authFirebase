import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './AuthForm.css';

function SignIn() {
  const showModal = useSelector((state) => state);

  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch({
      type: 'CLOSEMODAL',
    });
  };

  return (
    <div className={showModal.showSignIn ? 'global-modal' : 'hide-modal'}>
      <div onClick={closeModal} className="overlay"></div>

      <div className="container-modal">
        <form className="form-auth">
          <h2>CONNEXION</h2>

          <label htmlFor="mail">Votre mail</label>
          <input type="email" id="mail" required />

          <label htmlFor="password">Votre mot de passe</label>
          <input type="password" id="password" required />

          <button className="btn-sign">Se connecter</button>
        </form>
        <button onClick={closeModal} className="btn-close">
          X
        </button>
        <p className="bottom-help-text">Besoin de créer un compte ?</p>
      </div>
    </div>
  );
}

export default SignIn;
