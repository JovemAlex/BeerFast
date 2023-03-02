import React, { useContext, useState } from 'react';
import axios from 'axios';
import AppContext from '../contexts/AppContext';

export default function Login() {
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState(false);
  const [user, setUser] = useState('');
  const { email,
    setEmail,
    password,
    setPassword,
  } = useContext(AppContext);

  const validate = () => {
    const max = 6;
    if (/\S+@\S+\.\S+/.test(email) && password.length >= max) {
      return setDisabled(false);
    }
    setError(false);
    return setDisabled(true);
  };

  const loginPost = async () => {
    try {
      const { data } = await axios.post('http://localhost:3001/login', { email, password });
      setUser(data);
      localStorage.setItem('user', JSON.stringify(user));
    } catch (err) {
      setError(true);
    }
  };

  const handleClick = (event) => {
    event.preventDefault();

    loginPost();
  };

  return (
    <form>
      <div>
        <h1>Please sign in</h1>
        <input
          type="email"
          data-testid="common_login__input-email"
          placeholder="type your email"
          onChange={ ({ target }) => { setEmail(target.value); validate(); } }
          value={ email }
        />
      </div>
      <input
        type="password"
        data-testid="common_login__input-password"
        placeholder="type your password"
        onChange={ ({ target }) => { setPassword(target.value); validate(); } }
        value={ password }
      />
      <button
        type="button"
        data-testid="common_login__button-login"
        disabled={ disabled }
        onClick={ handleClick }
      >
        LOGIN

      </button>
      <button
        type="button"
        data-testid="common_login__button-register"
      >
        Ainda não tenho conta

      </button>

      { error
      && <span data-testid="common_login__element-invalid-email">Email Invalido</span> }

    </form>

  );
}
