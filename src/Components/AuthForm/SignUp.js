import React from 'react';

import './AuthForm.css';

function SignUp() {
  return (
    <div className="global-modal">
      <div className="overlay"></div>

      <div className="container-modal">
        <form className="form-auth">
          <h2>INSCRIPTION</h2>

          <label htmlFor="mail">Votre mail</label>
          <input type="email" id="mail" required />

          <label htmlFor="password">Votre mot de passe</label>
          <input type="password" id="password" required />

          <label htmlFor="confirmPassword">Confirmez le mot de passe</label>
          <input type="password" id="confirmPassword" required />

          <button className="btn-sign">S'inscrire</button>
        </form>
        <button className="btn-close">X</button>
        <p className="bottom-help-text">Vous avez déja un compte ?</p>
      </div>
    </div>
  );
}

export default SignUp;
