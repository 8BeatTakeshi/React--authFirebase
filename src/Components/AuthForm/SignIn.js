import React, { useRef, useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { AuthContext } from '../../context/AuthContext';
import { useHistory } from 'react-router-dom';
import './AuthForm.css';

function SignIn() {
  const [error, setError] = useState('');
  const history = useHistory();
  const { login } = useContext(AuthContext);

  const showModal = useSelector((state) => state);

  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch({
      type: 'CLOSEMODAL',
    });
  };

  const toggleSignUp = () => {
    dispatch({
      type: 'TOGGLEUP',
    });
  };

  const inputsRef = useRef([]);
  const addInputs = (el) => {
    if (el && !inputsRef.current.includes(el)) {
      inputsRef.current.push(el);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(inputsRef.current[0].value, inputsRef.current[1].value);
      closeModal();
      history.push('/loggedHome');
    } catch (err) {
      console.log(err);
      setError('Email ou mot de passe incorrect!');
    }
  };

  return (
    <div className={showModal.showSignIn ? 'global-modal' : 'hide-modal'}>
      <div onClick={closeModal} className="overlay"></div>

      <div className="container-modal">
        <form onSubmit={handleSubmit} className="form-auth">
          <h2>CONNEXION</h2>

          <label htmlFor="mail">Votre mail</label>
          <input type="email" ref={addInputs} id="mail" required />

          <label htmlFor="password">Votre mot de passe</label>
          <input type="password" ref={addInputs} id="password" required />

          {error}

          <button className="btn-sign">Se connecter</button>
        </form>
        <button onClick={closeModal} className="btn-close">
          X
        </button>
        <p onClick={toggleSignUp} className="bottom-help-text">
          Besoin de créer un compte ?
        </p>
      </div>
    </div>
  );
}

export default SignIn;
