import React, { useRef, useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { AuthContext } from '../../context/AuthContext';
import { useHistory } from 'react-router-dom';
import './AuthForm.css';

function SignUp() {
  const [error, setError] = useState('');
  const history = useHistory();
  const { signup } = useContext(AuthContext);

  const showModal = useSelector((state) => state);

  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch({
      type: 'CLOSEMODAL',
    });
  };

  const toggleSignIn = () => {
    dispatch({
      type: 'TOGGLEIN',
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

    // check if password and confirm password are same
    if (inputsRef.current[1].value !== inputsRef.current[2].value) {
      setError('Les mots de passes ne sont pas identiques!');
      return;
    }

    try {
      await signup(inputsRef.current[0].value, inputsRef.current[1].value);
      closeModal();
      history.push('/loggedHome');
    } catch (err) {
      // console.log(err);
      if (err.code === 'auth/email-already-in-use') {
        setError("L'email est déja utilisé par un autre compte!");
      }
    }
  };

  return (
    <div className={showModal.showSignUp ? 'global-modal' : 'hide-modal'}>
      <div onClick={closeModal} className="overlay"></div>

      <div className="container-modal">
        <form onSubmit={handleSubmit} className="form-auth">
          <h2>INSCRIPTION</h2>

          <label htmlFor="mail">Votre mail</label>
          <input type="email" ref={addInputs} id="mail" required />

          <label htmlFor="password">Votre mot de passe</label>
          <input type="password" ref={addInputs} id="password" required />

          <label htmlFor="confirmPassword">Confirmez le mot de passe</label>
          <input
            type="password"
            ref={addInputs}
            id="confirmPassword"
            required
          />

          {error}

          <button className="btn-sign">S'inscrire</button>
        </form>
        <button onClick={closeModal} className="btn-close">
          X
        </button>
        <p onClick={toggleSignIn} className="bottom-help-text">
          Vous avez déja un compte ?
        </p>
      </div>
    </div>
  );
}

export default SignUp;
